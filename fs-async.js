const { readFile, writeFile } = require('fs');
let fileData = "sdefrsg";
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    console.log(first);
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;
        console.log(second);
        writeFile('./content/writeTest.txt', `Result : ${first} , ${second}`, {flag: 'a'},(err, result) => {
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
        })
    })

});
// writeFile('./content/writeTest.txt', `Result : ${fileData}`, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })