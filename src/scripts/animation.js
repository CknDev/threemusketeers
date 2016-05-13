import { move } from './actionList'

/* TODO: (animation/animationFwd) doc */
/* TODO: animation/animationFwd is not abstract enough */
export function animationFwd(startPosition, stepCount, canvas, entityList) {
    let to;
    while (startPosition <= (canvas.width / stepCount)) {
        startPosition = startPosition + 1
        to = setTimeout(() => {
            entityList = move(entityList)
            clearTimeout(to)
        },
                        stepCount * startPosition)
    }
}

