import $ from './$'
import config from './config'
import { entity,
         movable } from './action'

export function create(name, x, y, state) {
    return Object.assign({},
                         state,
                         { name, x, y })
}

const canvas = $('canvas.main')
canvas.width = config.canvas.width
canvas.height = config.canvas.height
const context = canvas.getContext('2d')
const musketeerEntity = movable(5, 0, entity(24, 24, context))
const musketeer = { canvas,
                    context,
                    entity : musketeerEntity,
                    create }
export default musketeer
