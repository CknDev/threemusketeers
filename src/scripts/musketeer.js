import R from 'ramda'
import $ from './$'
import * as renderer from './render'
import config from './config'

import { entity,
         movable,
         jumpable,
         jump } from './action'

export function create(name, x, y, state) {
    return Object.assign({},
                         state,
                         { name, x, y })
}

export function high(musketeer) {
    return musketeer.y -
        musketeer.velocity.y
}
export function low(musketeer) {
    return musketeer.y +
        musketeer.velocity.y
}
const curriedJump = R.curry(jump)
const musketeerJump = curriedJump(20, renderer.update)

/* TODO: musketeer/serialJump : implement a jump serial */

export function padd(height) {
    return height - 24
}

const canvas = $('canvas.main')
canvas.width = config.canvas.width
canvas.height = config.canvas.height
const context = canvas.getContext('2d')
const musketeerEntity = jumpable(1, 1,
                                 movable(5, 0,
                                         entity(24, 24, context)))

const musketeer = { canvas,
                    context,
                    entity : musketeerEntity,
                    atBottom: padd,
                    create,
                    jump: musketeerJump }
export default musketeer
