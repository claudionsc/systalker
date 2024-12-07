const si = require('systeminformation')

export class info {
    async get() {

        const systemInfo = si.system()
        const cpuInfo = si.cpu()
        const memory = si.mem()
        const memoryLayout = si.memLayout()
        const osInfo = si.osInfo()
        const diskLayout = si.diskLayout()
        // const networkInterfaces = si.networkInterfaces()
        const networkInterfaces = si.networkInterfaces('default')

        return networkInterfaces.then(data => console.log(data));
    }
}