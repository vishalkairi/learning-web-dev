const path = require('path');

//to see system path separator
console.log(path.sep);

//to join path
const filePath = path.join("context",'subfolder','test.txt')
console.log(filePath);

//base that is last part
const base = path.basename(filePath);
console.log(base);
 
//this returns a root directory and ignore all previous path
const absolute =  path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);