const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`the system uptime is ${os.uptime()}`);

const data = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(data);
