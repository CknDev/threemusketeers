import test from 'ava'
import R from 'ramda'
import { assetPath,
         dotify,
         destructNumber,
         isCharacter,
         isNumberCharacter,
         getAsset,
         getSceneAsset,
         getBackgroundAsset,
         numberAsWord,
         numberListAsWord,
         toAsset,
         toString } from '../src/scripts/asset'

test('assetPath', t => {
    t.is(assetPath(), 'asset')
})

test('dotify', t => {
    t.is(dotify('png'), '.png')
    t.is(dotify('.png'), '.png')
})

test('toString', t => {
    t.is(toString(42), '42')
})
test('isCharacter', t => {
    t.is(isCharacter('4'), true)
    t.is(isCharacter('42'), false)
})
test('isNumberCharacter', t => {
    t.is(isNumberCharacter(4), true)
    t.is(isNumberCharacter(42), false)
})
test('destructNumber', t => {
    t.deepEqual(destructNumber(4), Array(toString(4)))
    t.deepEqual(destructNumber(42), [toString(4), toString(2)])
})
test('numberAsWord', t => {
    t.is(numberAsWord('4'), 'Four')
})
test('numberListAsWord', t => {
    t.is(numberListAsWord(destructNumber(42)), 'FourTwo')
})
test('toAsset', t => {
    t.is(toAsset(4, 'png'), "Four.png")
    t.is(toAsset(42, 'png'), "FourTwo.png")
})

test('getAsset', t => {
    t.is(getAsset('ressource', 1),
            "asset/ressource/One.png")
})
test('getSceneAsset', t => {
    t.is(getSceneAsset(2),
            "asset/scene/Two.png")
})
test('getBackgroundAsset', t => {
    t.is(getBackgroundAsset(42),
         "asset/background/FourTwo.png")
})
