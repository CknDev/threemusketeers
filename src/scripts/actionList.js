import * as renderer from './render'
import { updatePosition } from './action'

export function render(entityList) {
    entityList.forEach(renderer.render)
}
export function move(entityList) {
    const movedEntityList = entityList.map(updatePosition)
    entityList.forEach(renderer.clear)
    render(movedEntityList)
    return movedEntityList
}
