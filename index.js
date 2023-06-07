

import * as THREE from './three.js-master/build/three.module.js';
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js';

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const loader = new GLTFLoader()
loader.load('assets/soda.glb', function(glb){
    console.log(glb)
    const root = glb.scene;
    root.scale.set(10,10,10)
    object = root;

    scene.add(root);
    object = root;
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log('An error occured')
})

const light = new THREE.DirectionalLight(0xffffff,2)
light.position.set(2, 2, 5);

scene.add(light)


  //  const geometry = new THREE.BoxGeometry(1,1,1)
  //  const material = new THREE.MeshBasicMaterial({
   //     color: 'green'
   // })
  //  const boxMesh = new THREE.Mesh(geometry,material)
  //  scene.add(boxMesh)


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,0.5,5)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true
renderer.render(scene, camera)
let elapsedTime = 0;
let object;
function animate(){
    requestAnimationFrame(animate)
    elapsedTime += 0.01;
    const radius = 2; // Radius of the circular path
    const speed = 1; // Speed of rotation
    const xPos = Math.cos(elapsedTime * speed) * radius;
    const yPos = Math.sin(elapsedTime * speed) * radius;
    if (object) {
        object.position.set(0, 0, 3);
        object.rotation.y += 0.01; // Adjust the rotation speed as needed

    }

    renderer.render(scene,camera)
}
animate()

const bg = new THREE.TextureLoader().load('./assets/background.png');
scene.background = bg;
