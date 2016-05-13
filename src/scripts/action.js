import R from 'ramda'

export function entity(w, h, ctx) {
    return Object.assign({},
                         { w, h, ctx})
}

export function movable(xVel, yVel, state) {
    return Object.assign({},
                         state,
                         { velocity: { x: xVel, y: yVel } })
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
