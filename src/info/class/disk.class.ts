import { SystemInfoDto } from "../DTO/info";

const si = require('systeminformation');

export class disk {
  async get() {
    const data = await si.diskLayout();

    const datasystem: SystemInfoDto["diskLayout"] = data.map((data: any) => ({
      type: data.type,
      name: data.name,
      vendor: data.vendor,
      size: data.size,
      bytesPerSector: data.bytesPerSector,
      firmwareRevision: data.firmwareRevision,
      serialNum: data.serialNum,
      interfaceType: data.interfaceType,
      smartStatus: data.smartStatus,
    }));

    return datasystem;
  }
}
