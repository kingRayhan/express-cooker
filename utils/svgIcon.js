const fs = require('fs')

// const icon = name => fs.readFileSync(`../public/assets/icons/${name}.svg`)

function icon(name) {
    let dd = fs.readFileSync(`../public/assets/icons/${name}.svg`)

    return JSON.stringify(dd)
}

module.exports = name => icon(name)
