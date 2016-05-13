import path from 'path'
import R from 'ramda'

export function assetPath() {
    return 'asset'
}

export const dotify = (s) => (/^\./).test(s) ? s : `.${s}`
export const toString = (a) => a.toString()
export const isCharacter = (a) => 1 === a.length
export const isNumberCharacter = (n) => R.compose(isCharacter, toString)(n)

export function destructNumber(number) {
    if (true === isNumberCharacter(number)) {
        return [toString(number)]
    }
    return toString(number).split('')
}

export function numberAsWord(number) {
    const numberWordList = ['Zero', 'One', 'Two',
                            'Three', 'Four', 'Five',
                            'Six', 'Seven', 'Eight', 'Nine']
    return R.view(R.lensIndex(number), numberWordList)
}

export function numberListAsWord(numberList) {
   return numberList
        .reduce((a, b) => numberAsWord(a).concat(numberAsWord(b)))
}

export function asWord (list) {
    if (true === isCharacter(list)) {
        return numberAsWord(list)
    }
    return numberListAsWord(list)
}

export function toAsset(number, extension) {
    const ext = dotify(extension)
    const result = R.compose(asWord, destructNumber)(number)
    return `${result}${ext}`
}

export function getAsset(category, id) {
    return path.join(assetPath(),
                     category,
                     toAsset(id, 'png'))
}
export const curriedGetAsset = R.curry(getAsset)
export const getSceneAsset = curriedGetAsset('scene')
export const getBackgroundAsset = curriedGetAsset('background')
