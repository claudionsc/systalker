import { SystemInfoDto } from "../DTO/info";

const si = require('systeminformation');

export class cpu {
  async get() {
    const data = await si.cpu();

    const datasystem: SystemInfoDto["cpu"] = {
        manufacturer: data.manufacturer,
        brand: data.brand,
        speed: data.speed,
        cores: data.cores,
        physicalCores: data.physicalCores,
        processors: data.processors
    };

    return datasystem;
  }
}
