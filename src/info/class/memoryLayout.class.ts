import { SystemInfoDto } from "../DTO/info";

const si = require('systeminformation');

export class memoryLayout {
  async get() {
    const data = await si.memLayout();

    const datasystem: SystemInfoDto["memoryLayout"] = data.map((data: any) => ({
        size: data.size,
        type: data.type,
        clockSpeed: data.clockSpeed,
        manufacturer: data.manufacturer,
        partNum: data.partNum,
        serialNum: data.serialNum
        
    }));

    return datasystem;
  }
}
