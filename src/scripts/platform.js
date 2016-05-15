import $ from './$'
import config from './config'
import * as render from './render'
import * as action from './action'

export function create(id, x, y, state) {
    return Object.assign({},
                         state,
                         { id, x, y })
}

export function move(entity) {
    let updated = entity
    render.render(updated)
    setInterval(() => {
        updated = action.move(updated)
    }, entity.velocity.x)
}

const canvas = $('canvas.enemies')
canvas.width = config.canvas.width
canvas.width = config.canvas.height
const context = canvas.getContext('2d')
const platform = { canvas,
                   context,
                   create,
                   move }
export default platform
