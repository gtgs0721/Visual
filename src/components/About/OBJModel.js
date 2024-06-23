import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const OBJModel = () => {
  const mountRef = useRef(null);
  const objRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    // 渲染器设置
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // 透明背景
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    mountNode.appendChild(renderer.domElement);

    // 场景设置
    const scene = new THREE.Scene();

    // 相机设置
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(7, 4, 1);

    // 控制器设置
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 1, 0);
    controls.update();
    controlsRef.current = controls;

    // 环境光设置
    const ambient = new THREE.HemisphereLight(0xffffff, 0x8d8d8d, 0.15);
    scene.add(ambient);

    // 聚光灯设置
    const spotLight = new THREE.SpotLight(0xffffff, 100);
    spotLight.position.set(2.5, 5, 2.5);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 1;
    spotLight.decay = 2;
    spotLight.distance = 0;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 10;
    spotLight.shadow.focus = 1;

    // 加载聚光灯纹理
    const textureLoader = new THREE.TextureLoader();
    const mapTexture = textureLoader.load('/T241/disturb.jpg');
    spotLight.map = mapTexture;

    scene.add(spotLight);

    // 加载 OBJ 模型
    const loader = new OBJLoader();
    let obj;
    loader.load('/T241/the-buddha-statue-in-a-mountain.obj', (loadedObj) => {
      obj = loadedObj;
      obj.position.set(0, -1, 0);
      obj.scale.set(0.45, 0.45, 0.45);
      obj.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      scene.add(obj);
      objRef.current = obj;
    }, undefined, (error) => {
      console.error('加载 OBJ 文件时发生错误：', error);
    });

    // Raycaster 和鼠标向量
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // 检测鼠标是否悬停在模型上
    const onMouseMove = (event) => {
      // 计算鼠标在 NDC 坐标系中的位置
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // 使用 raycaster 检测
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(objRef.current, true);

      if (intersects.length > 0) {
        controlsRef.current.enabled = true;
      } else {
        controlsRef.current.enabled = false;
      }
    };

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      const time = performance.now() / 3000;
      if (obj) {
        obj.rotation.y = time; // 使佛像绕 y 轴旋转
      }
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 处理窗口大小变化
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      mountNode.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative', top: -950, left: -50, width: '100%', height: '100vh',zIndex:"-1" }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default OBJModel;
