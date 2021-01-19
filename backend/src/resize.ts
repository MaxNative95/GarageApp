const fs = require('fs');
const sharp = require('sharp');

const resize = (path: string, format: any, width: any, height: any) => {
    const readStream = fs.createReadStream(path);
    let transform = sharp()
    if (format) {
        transform = transform.toFormat(format)
    }

    if (width || height) {
        transform = transform.resize(width, height)
    }

    return readStream.pipe(transform)
};

export {
    resize
};
