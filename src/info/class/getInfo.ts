const si = require('systeminformation');

export class Info {
    async get() {
       
        const systemInfo = await si.system();
        const cpuInfo = await si.cpu();
        const memory = await si.mem();
        const memoryLayout = await si.memLayout();
        const osInfo = await si.osInfo();
        const diskLayout = await si.diskLayout();
        const networkInterfaces = await si.networkInterfaces('default');

        
        const systemData = {
            system: systemInfo,
            cpu: cpuInfo,
            memory: memory,
            memoryLayout: memoryLayout,
            os: osInfo,
            diskLayout: diskLayout,
            networkInterfaces: networkInterfaces,
        };

        
        console.log(systemData);

        return systemData; 
    }
}
