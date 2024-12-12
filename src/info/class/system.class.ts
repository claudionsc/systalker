import { SystemInfoDto } from "../DTO/info";

const si = require('systeminformation');

export class system {
  async get() {
    const data = await si.system();

    const datasystem: SystemInfoDto["system"] = {
        manufacturer: data.manufacturer,
        model: data.model,
        version: data.version,
        serial: data.serial,
        uuid: data.uuid,
    };

    return datasystem;
  }
}
