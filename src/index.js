// const DATA_SOURCE = '../data/index.js'
// import model from '../data/index.js'
import view from './view'
// import intent from './intent.js'

// import '../style/index.css'

// intent()

const CONTAINER_ID = 'body'
let div = document.createElement('div')
div.id = CONTAINER_ID
document.body.appendChild(div)
const $container = document.querySelector(CONTAINER_ID)
$container.innerHTML = view(/*model*/)
