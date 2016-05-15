import R from 'ramda'
import $ from './$'

export function clear(entity) {
    const { x, w, y, h, ctx } = entity
    ctx.clearRect(x - 1, y - 1, w + 2, h + 2)
    return entity
}

export function render(entity) {
    const { x, w, y, h, ctx } = entity
    ctx.beginPath()
    ctx.rect(x, y, w, h)
    ctx.strokeStyle = 'black'
    ctx.stroke()
    return entity
}

export function update(entity) {
    return R.compose(render, clear)(entity)
}

export function toPx(integer) {
    return `${integer}px`
}


export function background(size) {
    const el = $('.background')
    el.style.width = toPx(size.width)
    el.style.height = toPx(size.height)
}

export function image(ctx, optionList, img) {
    const [dx, dy, dw, dh,
           sx, sy, sw, sh] = optionList
    ctx.drawImage(img,
                  dx, dy, dw, dh,
                  sx, sy, sw, sh)
}

export function scene(payload) {
    const { ctx, dx, dy, dw, dh,
            w, h, sx, sy } = payload
    const img = payload.image
    image(ctx,
          [dx, dy, dw, dh, sx, sy, w, h],
          img)
}
