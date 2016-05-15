import R from 'ramda'
import * as action from './action'
import config from './config'
import $ from './$'
import { getSceneAsset } from './asset'
import * as image from './image'
import * as renderer from './render'

function create(name, id, state) {
    const [sx, sy, dx, dy] = Array(4).fill(0)
    const dw = config.canvas.width
    const dh = config.canvas.height
    const options = Object.assign({},
                                  { dx, dy, sx, sy,
                                    dw, dh})
    const source = image.create(getSceneAsset(id))
    return Object.assign({},
                         state,
                         name,
                         { image: source },
                         options)
}

export function treadmil(state) {
    const dxLens = R.lensProp('dx')
    const dyLens = R.lensProp('dy')
    const xPosLens = R.lensProp('x')
    const yPosLens = R.lensProp('y')
    const position = action.updatePosition({ x: R.view(dxLens, state),
                                             y: R.view(dyLens, state),
                                             velocity: state.velocity })
    const updatedState = R.compose(R.set(dxLens,
                                         R.view(xPosLens, position)),
                                   R.set(dyLens,
                                         R.view(yPosLens, position)))(state)
    let to = setTimeout(() => {
        renderer.scene(updatedState)
        clearTimeout(to)
        treadmil(updatedState)
    }, 60)
}

const canvas = $('canvas.scene')
canvas.width = config.canvas.width
canvas.height = config.canvas.height
const context = canvas.getContext('2d')
const sceneEntity = action.movable(5, 0, action.entity(1024, 240, context))

const scene = { canvas,
                context,
                entity : sceneEntity,
                create,
                treadmil }
export default scene
