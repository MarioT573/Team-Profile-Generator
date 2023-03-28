const fs = require('fs');

const htmlCreate = (html) => {
    fs.writeFile('./dist/index.html', html, (err) => {
        if (err) throw err;
        console.log('Your webpage has been created!');
    })
}

module.exports = htmlCreate;