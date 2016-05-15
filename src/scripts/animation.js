import { move } from './actionList'
import * as action from './action'
/* TODO: (animation/animationFwd) doc */
/* TODO: (animation/animationFwd) is not abstract enough */
/* TODO: (animation/animationFwd) too much arity : curry */
export function sceneForward(startPosition, stepCount, canvas, entityList) {
    let to
    while (startPosition <= (canvas.width / stepCount)) {
        startPosition = startPosition + 1
        to = setTimeout(() => {
            entityList = move(entityList)
            clearTimeout(to)
        },
                        stepCount * startPosition)
    }
}
