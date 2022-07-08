const {readFileSync , writeFileSync} =  require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/first.txt', 'utf8');
console.log(first);
console.log(second);
// writeFileSync will overwrite everytime, but if we pass another argument "flag : a" it will append
writeFileSync('./content/writeTest.txt',`Here is the result ${first}`, {flag : "a"});