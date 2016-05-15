import R from 'ramda'
import * as action from './action'
import * as animation from './animation'
import * as actionList from './actionList'
import musketeer from './musketeer'
import scene from './scene'
import platform from './platform'
import * as image from './image'
import * as render from './render'

/* TODO: scoped to a level, so need to move it in a level.js or something */
const bottom = action.atBottom(musketeer.canvas, musketeer.entity)
const bottomMusketeer = musketeer.atBottom(bottom)

const aramis = musketeer.create('Aramis', 0, bottomMusketeer,
                                musketeer.entity)
const athos = musketeer.create('Athos', 24, bottomMusketeer,
                               musketeer.entity)
const porthos = musketeer.create('Porthos', 48, bottomMusketeer,
                                 musketeer.entity)
const threeMusketeers = [aramis, athos, porthos]

// actionList.render(threeMusketeers)
// animation.sceneForward(0, 25, musketeer.canvas, threeMusketeers)
const platformZero = platform.create(1,
                                     120,
                                     24 * 2,
                                     action.movable(-1, 0,
                                                    action.entity(150,
                                                                  20,
                                                                  platform.context)))
const platforms = [platformZero]
const levelZero = scene.create(scene.canvas, 0, scene.entity)

image.load(() => {
    render.scene(levelZero)
    scene.treadmil(levelZero)
    platform.move(platformZero)
    musketeer.jump(aramis)
}, levelZero.image)
