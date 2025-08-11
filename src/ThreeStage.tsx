import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'
import type { Recipe, Vec3, CameraSpec } from './types'
import { vfovDeg, hfovDeg, bokehIndex, lightSoftness } from './utils_photomath'
import { effectiveLookAtPoint } from './utils_auto'

type TargetKind = 'camera' | 'subject' | 'light' | 'aim'

interface Props {
  recipe: Recipe
  onRecipeChange: (r: Recipe | ((prev: Recipe) => Recipe)) => void
  target: 'camera' | 'subject' | 'light' | 'aim'
  onTargetChange: (t: 'camera' | 'subject' | 'light' | 'aim') => void
  showHelpers?: boolean
  controlMode?: boolean
  aimClickMode?: 'off' | 'holdShift' | 'always'
  autoSwitchAimOnClick?: boolean
}

const HELPER_LAYER = 1

export default function ThreeStage({ 
  recipe, 
  onRecipeChange, 
  target, 
  onTargetChange, 
  showHelpers = true, 
  controlMode = false,
  aimClickMode = 'holdShift',
  autoSwitchAimOnClick = false
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const previewRef = useRef<HTMLCanvasElement | null>(null)
  const sceneRef = useRef<{
    setTransformTarget: (kind: TargetKind) => void
    setHelpersVisible: (visible: boolean) => void
    updateFromRecipe: (newRecipe: Recipe) => void
    setControlMode: (enabled: boolean) => void
  } | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf6f6f6)

    // Editor camera (for orbiting the scene)
    const editorCam = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
    editorCam.position.set(6, 4, 8)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Grid - 保持在默认层，始终显示
    const grid = new THREE.GridHelper(20, 20, 0x999999, 0xdddddd)
    scene.add(grid)
    
    // Axes - 保持在默认层，始终显示
    const axes = new THREE.AxesHelper(1.5)
    scene.add(axes)

    // Subject group (supports both rect and figure modes)
    const subjectGroup = new THREE.Object3D()
    subjectGroup.name = 'subjectGroup'
    scene.add(subjectGroup)

    // Rectangle mode mesh
    const rectMat = new THREE.MeshStandardMaterial({ color: 0x88c0d0, side: THREE.DoubleSide, roughness: 0.7 })
    const rectGeo = new THREE.PlaneGeometry(1, 1)
    const rectMesh = new THREE.Mesh(rectGeo, rectMat)
    rectMesh.name = 'subjectRect'
    subjectGroup.add(rectMesh)

    // Figure mode group
    const figureGroup = new THREE.Object3D()
    figureGroup.name = 'subjectFigure'
    subjectGroup.add(figureGroup)

    // Camera rig (rep as small box); the actual shooting camera will follow this
    const camRig = new THREE.Object3D()
    camRig.position.set(...recipe.cameraRig.position)
    scene.add(camRig)
    const camMarker = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.1,0.1), new THREE.MeshBasicMaterial({color:0x222222}))
    // 相机标记保持在默认层，不受 showHelpers 影响
    camRig.add(camMarker)

    // Shooting camera (virtual camera preview)
    const shootCam = new THREE.PerspectiveCamera(50, 16/9, 0.1, 100)
    camRig.add(shootCam)

    // Light arrow - 分配到 HELPER_LAYER
    const lightPos = new THREE.Vector3(...recipe.light.position)
    const lightDir = new THREE.Vector3(0, 1, 0)
    const arrow = new THREE.ArrowHelper(lightDir, lightPos, 1.5, 0xffaa00, 0.2, 0.12)
    arrow.name = 'lightArrow'
    arrow.layers.set(HELPER_LAYER)
    scene.add(arrow)

    // Aim target (对准点) - 分配到 HELPER_LAYER
    const aimTarget = new THREE.Object3D()
    aimTarget.name = 'aimTarget'
    aimTarget.layers.set(HELPER_LAYER)
    scene.add(aimTarget)
    
    // 对准点可视化：蓝色小球
    const aimSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0x4a90e2, transparent: true, opacity: 0.8 })
    )
    aimTarget.add(aimSphere)
    
    // 对准箭头：从相机指向对准点
    const aimArrowDir = new THREE.Vector3(0, 0, -1)
    const aimArrow = new THREE.ArrowHelper(aimArrowDir, new THREE.Vector3(), 1, 0x4a90e2, 0.15, 0.08)
    aimArrow.name = 'aimArrow'
    aimArrow.layers.set(HELPER_LAYER)
    scene.add(aimArrow)

    // 初始化对准点位置
    const initAimTarget = () => {
      const aimPoint = effectiveLookAtPoint(recipe)
      aimTarget.position.copy(aimPoint)
    }
    initAimTarget()

    // 更新对准箭头
    const updateAimArrow = () => {
      const camPos = camRig.position.clone()
      const aimPos = aimTarget.position.clone()
      const direction = new THREE.Vector3().subVectors(aimPos, camPos).normalize()
      const distance = camPos.distanceTo(aimPos)
      
      aimArrow.position.copy(camPos)
      aimArrow.setDirection(direction)
      aimArrow.setLength(Math.max(0.3, Math.min(distance * 0.8, 3.0)))
    }
    updateAimArrow()

    // Ambient + a small directional light so we see things
    scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const dir = new THREE.DirectionalLight(0xffffff, 0.6)
    dir.position.set(3,5,2)
    scene.add(dir)

    // 设置相机层
    // shootCam 只看 0 层（主体等实体对象）
    shootCam.layers.enable(0)
    shootCam.layers.disable(HELPER_LAYER)
    
    // editorCam 看 0 层和 HELPER_LAYER
    editorCam.layers.enable(0)
    editorCam.layers.enable(HELPER_LAYER)

    // Controls
    const orbit = new OrbitControls(editorCam, renderer.domElement)
    orbit.enableDamping = true

    const tcontrols = new TransformControls(editorCam, renderer.domElement)
    // TransformControls 的所有子对象都分配到 HELPER_LAYER
    tcontrols.traverse((obj: any) => {
      if (obj.layers) obj.layers.set(HELPER_LAYER)
    })
    scene.add(tcontrols)
    tcontrols.addEventListener('dragging-changed', (e:any) => {
      orbit.enabled = !e.value
    })

    // Resize
    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      editorCam.aspect = w/h
      editorCam.updateProjectionMatrix()
      renderer.setSize(w,h)
    }
    resize()
    window.addEventListener('resize', resize)

    // Build figure mode (three segments: head, upper, lower)
    const buildFigure = (spec: Recipe['subject']) => {
      figureGroup.clear()
      const hM = spec.height / 100
      const headRatio  = spec.figureStyle?.headRatio  ?? 0.12
      const upperRatio = spec.figureStyle?.upperRatio ?? 0.38
      const lowerRatio = spec.figureStyle?.lowerRatio ?? 0.50
      const headH = hM * headRatio
      const upperH = hM * upperRatio
      const lowerH = hM * lowerRatio

      const colHead  = spec.figureStyle?.colors?.head  ?? 0xf2c6c2
      const colUpper = spec.figureStyle?.colors?.upper ?? 0x6aa9ff
      const colLower = spec.figureStyle?.colors?.lower ?? 0x88c0d0

      // 头：球体
      const head = new THREE.Mesh(new THREE.SphereGeometry(headH*0.5, 16, 12),
                                  new THREE.MeshStandardMaterial({ color: colHead, roughness: 0.6 }))
      head.position.y = lowerH + upperH + headH*0.5
      figureGroup.add(head)

      // 上半身：箱体（肩稍宽、腰略收）
      const upperW = (spec.width/100) * 1.05
      const upper = new THREE.Mesh(new THREE.BoxGeometry(upperW, upperH, upperW*0.45),
                                   new THREE.MeshStandardMaterial({ color: colUpper, roughness: 0.7 }))
      upper.position.y = lowerH + upperH*0.5
      figureGroup.add(upper)

      // 下半身：箱体（胯略宽、向下收）
      const lowerTopW  = (spec.width/100) * 1.05
      const lowerBaseW = (spec.width/100) * 0.75
      const lower = new THREE.Mesh(new THREE.BoxGeometry(lowerTopW, lowerH, lowerBaseW),
                                   new THREE.MeshStandardMaterial({ color: colLower, roughness: 0.8 }))
      lower.position.y = lowerH*0.5
      figureGroup.add(lower)
    }

    // Place subject according to recipe
    const updateSubject = (spec: Recipe['subject']) => {
      const hM = spec.height / 100 // cm -> m
      const wM = spec.width / 100
      // 根节点放在地面，x,z 来自 spec.position
      subjectGroup.position.set(spec.position[0], 0, spec.position[2])

      // 面向相机（仅 Y 轴旋转）
      const camPos = camRig.position.clone()
      const dir = new THREE.Vector3().subVectors(camPos, subjectGroup.position)
      const yaw = Math.atan2(dir.x, dir.z)
      subjectGroup.rotation.set(0, yaw, 0)

      // 矩形模式
      rectMesh.visible = (spec.visual ?? 'figure') === 'rect'
      figureGroup.visible = (spec.visual ?? 'figure') === 'figure'

      if (rectMesh.visible) {
        rectMesh.scale.set(wM, hM, 1)
        rectMesh.position.set(0, hM/2, 0)
        // 面向相机：上面已整体旋转，无需再 lookAt
      } else {
        buildFigure(spec)
        // figureGroup 的各段已按高度放置；整体 group 的 y=0 表示脚落地
      }
    }

    // Update camera according to spec
    const updateShootingCam = () => {
      const spec = recipe.cameraRig.spec
      // set vertical FOV from sensor height & focal
      const vFOV = vfovDeg(spec)
      shootCam.fov = vFOV
      shootCam.aspect = 16/9
      shootCam.updateProjectionMatrix()

      camRig.position.set(...recipe.cameraRig.position)
      const la = new THREE.Vector3(...recipe.cameraRig.lookAt)
      shootCam.lookAt(la)
    }

    // Update light arrow to point to subject center
    const updateArrow = () => {
      arrow.position.copy(lightPos)
      const subjCenter = new THREE.Vector3().copy(subjectGroup.position)
      subjCenter.y = recipe.subject.height / 200 // 指向主体中心高度
      const dirV = new THREE.Vector3().subVectors(subjCenter, lightPos).normalize()
      arrow.setDirection(dirV)
      const dist = lightPos.distanceTo(subjCenter)
      arrow.setLength(Math.max(0.5, Math.min(2.5, dist)))
    }

    updateSubject(recipe.subject)
    updateShootingCam()
    updateArrow()

    // Hook transform target
    let currentTarget: TargetKind = target
    let lightDummy: THREE.Object3D | null = null
    let currentObjectChangeHandler: (() => void) | null = null
    
    const setTransformTarget = (kind: TargetKind) => {
      console.log('Setting transform target to:', kind)
      currentTarget = kind
      tcontrols.detach()
      
      // Remove previous event listener if exists
      if (currentObjectChangeHandler) {
        tcontrols.removeEventListener('objectChange', currentObjectChangeHandler)
        currentObjectChangeHandler = null
      }
      
      if (kind === 'camera') {
        console.log('Attaching to camera rig')
        tcontrols.attach(camRig)
        tcontrols.setMode('translate')
        tcontrols.showX = true
        tcontrols.showY = true
        tcontrols.showZ = true
        
        // Update recipe when camera moves
        currentObjectChangeHandler = () => {
          console.log('Camera moved to:', camRig.position)
          const newPos: Vec3 = [camRig.position.x, camRig.position.y, camRig.position.z]
          onRecipeChange((currentRecipe) => {
            const updatedRecipe = {
              ...currentRecipe,
              cameraRig: { ...currentRecipe.cameraRig, position: newPos }
            }
            // Update shooting camera with new recipe data
            const spec = updatedRecipe.cameraRig.spec
            const vFOV = vfovDeg(spec)
            shootCam.fov = vFOV
            shootCam.aspect = 16/9
            shootCam.updateProjectionMatrix()
            
            const la = new THREE.Vector3(...updatedRecipe.cameraRig.lookAt)
            shootCam.lookAt(la)
            
            return updatedRecipe
          })
        }
        tcontrols.addEventListener('objectChange', currentObjectChangeHandler)
      } else if (kind === 'subject') {
        console.log('Attaching to subject')
        tcontrols.attach(subjectGroup)
        tcontrols.setMode('translate')
        tcontrols.showX = true
        tcontrols.showY = true
        tcontrols.showZ = true
        
        // Update recipe when subject moves
        currentObjectChangeHandler = () => {
          console.log('Subject moved to:', subjectGroup.position)
          onRecipeChange((currentRecipe) => {
            const newPos: Vec3 = [subjectGroup.position.x, subjectGroup.position.y, subjectGroup.position.z]
            return {
              ...currentRecipe,
              subject: { ...currentRecipe.subject, position: newPos }
            }
          })
          updateArrow()
        }
        tcontrols.addEventListener('objectChange', currentObjectChangeHandler)
      } else if (kind === 'light') {
        console.log('Attaching to light')
        // create a dummy object to drag the light position
        if (lightDummy) {
          scene.remove(lightDummy)
        }
        lightDummy = new THREE.Object3D()
        lightDummy.position.copy(lightPos)
        scene.add(lightDummy)
        tcontrols.attach(lightDummy)
        tcontrols.setMode('translate')
        tcontrols.showX = true
        tcontrols.showY = true
        tcontrols.showZ = true
        
        // Update recipe when light moves
        currentObjectChangeHandler = () => {
          console.log('Light moved to:', lightDummy!.position)
          lightPos.copy(lightDummy!.position)
          const newPos: Vec3 = [lightPos.x, lightPos.y, lightPos.z]
          onRecipeChange((currentRecipe) => ({
            ...currentRecipe,
            light: { position: newPos }
          }))
          updateArrow()
        }
        tcontrols.addEventListener('objectChange', currentObjectChangeHandler)
      } else if (kind === 'aim') {
        console.log('Attaching to aim target')
        tcontrols.attach(aimTarget)
        tcontrols.setMode('translate')
        tcontrols.showX = true
        tcontrols.showY = true
        tcontrols.showZ = true
        
        // Update recipe when aim target moves
        currentObjectChangeHandler = () => {
          console.log('Aim target moved to:', aimTarget.position)
          const newPos: Vec3 = [aimTarget.position.x, aimTarget.position.y, aimTarget.position.z]
          
          // 更新相机朝向
          shootCam.lookAt(aimTarget.position)
          updateAimArrow()
          
          // 更新 recipe
          onRecipeChange((currentRecipe) => ({
            ...currentRecipe,
            cameraRig: {
              ...currentRecipe.cameraRig,
              aim: {
                ...(currentRecipe.cameraRig.aim || {}),
                mode: 'custom',
                customPoint: newPos,
                eyeRatio: currentRecipe.cameraRig.aim?.eyeRatio ?? 0.93
              },
              lookAt: newPos
            }
          }))
        }
        tcontrols.addEventListener('objectChange', currentObjectChangeHandler)
      }
    }
    setTransformTarget(target)

    // 控制辅助元素显示/隐藏的函数
    const setHelpersVisible = (visible: boolean) => {
      // 控制编辑相机的层显示
      if (visible) {
        editorCam.layers.enable(HELPER_LAYER)
        // 显示时重新设置 target，确保 TransformControls 可用
        setTransformTarget(currentTarget)
      } else {
        editorCam.layers.disable(HELPER_LAYER)
        // 隐藏时，detach TransformControls 避免残留选中状态
        tcontrols.detach()
      }
    }

    // 从外部 recipe 更新场景的函数
    const updateFromRecipe = (newRecipe: Recipe) => {
      console.log('Updating scene from external recipe change:', newRecipe)
      
      // 更新相机位置
      camRig.position.set(...newRecipe.cameraRig.position)
      
      // 更新相机规格和朝向
      const spec = newRecipe.cameraRig.spec
      const vFOV = vfovDeg(spec)
      shootCam.fov = vFOV
      shootCam.aspect = 16/9
      shootCam.updateProjectionMatrix()
      
      const la = new THREE.Vector3(...newRecipe.cameraRig.lookAt)
      shootCam.lookAt(la)
      
      // 更新主体
      updateSubject(newRecipe.subject)
      
      // 更新光源位置
      lightPos.set(...newRecipe.light.position)
      
      // 更新光源箭头
      arrow.position.copy(lightPos)
      const subjCenter = new THREE.Vector3().copy(subjectGroup.position)
      subjCenter.y = newRecipe.subject.height / 200 // 指向主体中心高度
      const dirV = new THREE.Vector3().subVectors(subjCenter, lightPos).normalize()
      arrow.setDirection(dirV)
      const dist = lightPos.distanceTo(subjCenter)
      arrow.setLength(Math.max(0.5, Math.min(2.5, dist)))
      
      // 如果有光源 dummy，也更新它
      if (lightDummy) {
        lightDummy.position.copy(lightPos)
      }

      // 更新对准点位置
      const aimPoint = effectiveLookAtPoint(newRecipe)
      aimTarget.position.copy(aimPoint)
      updateAimArrow()
    }

    // 控制模式切换函数
    const setControlMode = (enabled: boolean) => {
      console.log('Setting control mode to:', enabled, 'current target:', currentTarget)
      if (enabled) {
        // 启用控制模式：允许拖动对象
        // 将 TransformControls 移到默认层，确保即使辅助元素隐藏也能看到控制手柄
        tcontrols.traverse((obj: any) => {
          if (obj.layers) obj.layers.set(0) // 移到默认层
        })
        setTransformTarget(currentTarget)
        console.log('Control mode enabled, TransformControls moved to layer 0 and attached to:', currentTarget)
      } else {
        // 禁用控制模式：只能调整视角
        tcontrols.detach()
        // 将 TransformControls 移回 HELPER_LAYER
        tcontrols.traverse((obj: any) => {
          if (obj.layers) obj.layers.set(HELPER_LAYER)
        })
        console.log('Control mode disabled, TransformControls detached and moved back to HELPER_LAYER')
      }
    }

    // Expose the functions to the component
    sceneRef.current = { setTransformTarget, setHelpersVisible, updateFromRecipe, setControlMode }

    // Preview renderer (small overlay)
    let previewRenderer: THREE.WebGLRenderer | null = null
    if (previewRef.current) {
      previewRenderer = new THREE.WebGLRenderer({ canvas: previewRef.current, antialias: true, alpha: true })
      previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      const pw = previewRef.current.clientWidth
      const ph = previewRef.current.clientHeight
      shootCam.aspect = pw / ph
      shootCam.updateProjectionMatrix()
      previewRenderer.setSize(pw, ph)
    }

    // 点击设置对准点功能
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    
    // TransformControls 拖拽状态
    let isDragging = false
    tcontrols.addEventListener('dragging-changed', (e: any) => { 
      isDragging = e.value 
    })

    function pickToSetAimPoint(e: MouseEvent) {
      // 早退条件
      if (aimClickMode === 'off') return
      if (aimClickMode === 'holdShift' && !e.shiftKey) return
      if (controlMode && currentTarget !== 'aim') return
      if (isDragging) return
      if ((tcontrols as any).axis) return // 正在 hover 手柄，避免抢事件
      
      // 忽略右键/中键
      if (e.button !== 0) return

      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, editorCam)

      // 1) 优先与被摄者（figure 或 rect）求交
      const targets: THREE.Object3D[] = []
      if (figureGroup.visible) targets.push(figureGroup)
      if (rectMesh.visible) targets.push(rectMesh)

      let hitPoint: THREE.Vector3 | null = null

      if (targets.length) {
        const inters = raycaster.intersectObjects(targets, true)
        if (inters.length) hitPoint = inters[0].point.clone()
      }

      // 2) 不命中则试地面（y=0 的 XZ 平面）
      if (!hitPoint) {
        const ground = new THREE.Plane(new THREE.Vector3(0,1,0), 0) // y=0
        const p = new THREE.Vector3()
        const ok = raycaster.ray.intersectPlane(ground, p)
        if (ok) hitPoint = p.clone()
      }

      if (!hitPoint) return

      // 移动 aimTarget 并更新 Recipe（切到 custom）
      aimTarget.position.copy(hitPoint)

      // 刷新相机朝向与箭头
      shootCam.lookAt(hitPoint)
      updateAimArrow()

      // 写回到 React 状态
      const p: Vec3 = [hitPoint.x, hitPoint.y, hitPoint.z]
      onRecipeChange({
        ...recipe,
        cameraRig: {
          ...recipe.cameraRig,
          aim: {
            ...(recipe.cameraRig.aim || {}),
            mode: 'custom',
            customPoint: p,
            eyeRatio: recipe.cameraRig.aim?.eyeRatio ?? 0.93
          },
          lookAt: p
        }
      })

      // 可选：是否自动切到"aim"目标
      if (autoSwitchAimOnClick && currentTarget !== 'aim') {
        onTargetChange('aim')
      }
    }

    // 绑定事件（只在编辑视图的 canvas）
    renderer.domElement.addEventListener('pointerdown', pickToSetAimPoint)

    // Animate
    const clock = new THREE.Clock()
    const tick = () => {
      const dt = clock.getDelta()
      orbit.update()
      renderer.render(scene, editorCam)
      if (previewRenderer) previewRenderer.render(scene, shootCam)
      requestAnimationFrame(tick)
    }
    tick()

    // Clean up
    return () => {
      window.removeEventListener('resize', resize)
      renderer.domElement.removeEventListener('pointerdown', pickToSetAimPoint)
      tcontrols.dispose()
      orbit.dispose()
      renderer.dispose()
      if (previewRenderer) previewRenderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  // Handle target changes from dropdown
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.setTransformTarget(target)
    }
  }, [target])

  // Handle showHelpers changes
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.setHelpersVisible(showHelpers)
    }
  }, [showHelpers])

  // Handle controlMode changes
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.setControlMode(controlMode)
    }
  }, [controlMode])

  // 监听 recipe 变化，更新场景
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.updateFromRecipe(recipe)
    }
  }, [recipe])

  return (
    <div ref={containerRef} className="canvas-wrap">
      <canvas 
        ref={previewRef} 
        className="preview-canvas"
      />
      {/* Overlay could show helper lines if needed */}
    </div>
  )
}
