export function aabb(a, b) {
    const aX = a.x + a.w
    const aY = a.y + a.h
    const bX = b.x + b.w
    const bY = b.y + b.h
    return false === aX < bx ||
        bX < ax ||
        aY < by ||
        bY < ay
}

export function collide(entity, ...vectors) {
    return vectors.filter(v => aabb(entity, v))
}
