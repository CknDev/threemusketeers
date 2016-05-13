export function create(fileName) {
    const image = new Image()
    image.src = fileName
    return image
}

export function load(fn, image) {
    image.addEventListener('load', fn)
}

