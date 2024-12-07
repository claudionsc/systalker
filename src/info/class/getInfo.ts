const si = require('systeminformation')

export class getInfo {
    async get() {
        return si.system().then(data => console.log(data));
    }
}