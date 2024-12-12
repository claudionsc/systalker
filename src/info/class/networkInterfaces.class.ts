import { SystemInfoDto } from "../DTO/info";

const si = require('systeminformation');

export class networkInterfaces {
  async get() {
    const data = await si.networkInterfaces();

    const datasystem: SystemInfoDto["networkInterfaces"] = data.map((data: any) => ({
      iface: data.iface,
      ip4: data.ip4,
      ip6: data.ip6,
      mac: data.mac,
      internal: data.internal,
    }));

    return datasystem;
  }
}
