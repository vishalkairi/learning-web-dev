const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);


//uptime of computer
const uptime = os.uptime();
console.log(uptime);

const currentOs = {
    name : os.type(),
    release : os.release(),
    freeMem : os.freemem(),
    totalMen : os.totalmem()
}
console.log(currentOs);