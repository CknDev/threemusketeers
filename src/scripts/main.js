import { atBottom } from './action'
import { animationFwd } from './animation'
import * as actionList from './actionList'
import musketeer from './musketeer'
import scene from './scene'
import * as image from './image'
import * as render from './render'

const bottomMusketeer = atBottom(musketeer.canvas,
                                 musketeer.entity)

const aramis = musketeer.create('Aramis', 0, bottomMusketeer,
                                musketeer.entity)
const athos = musketeer.create('Athos', 24, bottomMusketeer,
                               musketeer.entity)
const porthos = musketeer.create('Porthos', 48, bottomMusketeer,
                                 musketeer.entity)

const threeMusketeers = [aramis, athos, porthos]
actionList.render(threeMusketeers)
animationFwd(0, 25, musketeer.canvas, threeMusketeers)

const levelZero = scene.create(scene.canvas, 0, scene.entity)
image.load(() => {
    render.scene(levelZero)
    scene.treadmil(levelZero)
}, levelZero.image)





