// eslint-disable-next-line max-len
import {Scene, CubeTextureLoader, PerspectiveCamera, WebGLRenderer} from '../node_modules/three/build/three.module.js'
// eslint-disable-next-line max-len
import {OrbitControls} from '../node_modules/three/examples/jsm/controls/OrbitControls.js'

const scene = new Scene()
const urls = [
  './img/home.left.jpg',
  './img/home.right.jpg',
  './img/home.top.jpg',
  './img/home.bottom.jpg',
  './img/home.front.jpg',
  './img/home.back.jpg',
]
const cubeTexture = new CubeTextureLoader().load(urls)
scene.background = cubeTexture

const width = window.innerWidth
const height = window.innerHeight
const camera = new PerspectiveCamera(45, width / height, 0.1, 1000)

camera.position.set(0, 0, 100)
camera.lookAt(scene.position)

const renderer = new WebGLRenderer()
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)

/**
 * iii
 */
function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()

// eslint-disable-next-line no-unused-vars
const controls = new OrbitControls(camera)
