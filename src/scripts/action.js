import R from 'ramda'
import * as renderer from './render'

export function entity(w, h, ctx) {
    return Object.assign({},
                         { w, h, ctx})
}

export function movable(xVel, yVel, state) {
    return Object.assign({},
                         state,
                         { velocity: { x: xVel, y: yVel } })
}

export function jumpable(xJump, yJump, state) {
    return Object.assign({},
                         state,
                         { jump: {x: xJump, y: yJump } })
}

export function move(entity) {
    const movedEntity = updatePosition(entity)
    renderer.clear(entity)
    renderer.render(movedEntity)
    return movedEntity
}

export function high(velocity, y) {
    return y - velocity.y
}

export function low(velocity, y) {
    return y + velocity.y
}

export function jump(height, render, entity) {
    let { y } = entity
    let toHigh, toLow

    render(entity)

    toHigh = () => setInterval(() => {
        entity.y = high(entity.jump,
                        entity.y)
        render(entity)
        if (entity.y < height) {
            clearInterval(toHigh)
        }
    }, 1)

    toLow = () => setInterval(() => {
        entity.y = low(entity.jump,
                       entity.y)
        render(entity)
        console.log(entity.y)
        if (entity.y >= y) {
            clearInterval(toLow)
        }
    }, 1)

    return R.set(R.lensProp('y'), y, entity)
}

export function atBottom(canvas, entity) {
    return canvas.height - entity.h
}

export function updatePosition(state) {
    const { velocity } = state
    return Object.assign({},
                         state,
                         { x: state.x + velocity.x,
                           y: state.y + velocity.y })
}
