
const si = require('systeminformation');
import { SystemInfoDto } from "../DTO/info";
import { cpu } from "./cpu.class";
import { disk } from "./disk.class";
import { memory } from "./memory.class";
import { memoryLayout } from "./memoryLayout.class";
import { networkInterfaces } from "./networkInterfaces.class";
import { os } from "./os.class";
import { system } from "./system.class";

export class Info {

    constructor(
        
    ){}
    async get() {
       
        const systemInfo = new system;
        const cpuInfo = new cpu;
        const memoryInfo = new memory;
        const memoryLayoutInfo = new memoryLayout;
        const osInfo = new os;
        const diskLayoutInfo = new disk;
        const networkInterfacesInfo = new networkInterfaces;

        
        const systemData: SystemInfoDto = {
            system: await systemInfo.get(),
            cpu: await cpuInfo.get(),
            memory: await memoryInfo.get(),
            memoryLayout: await memoryLayoutInfo.get(),
            os: await osInfo.get(),
            diskLayout: await diskLayoutInfo.get(),
            networkInterfaces: await networkInterfacesInfo.get(),
        };

        
        // console.log('dados inseridos', systemData);

        return systemData; 
    }
}
