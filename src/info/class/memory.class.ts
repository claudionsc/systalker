import { SystemInfoDto } from "../DTO/info";

const si = require('systeminformation');

export class memory {
  async get() {
    const data = await si.mem();

    const datasystem: SystemInfoDto["memory"] = {
        total: data.total,
        free: data.free,
        used: data.used,
        active: data.active,
        available: data.available,
        buffcache: data.buffcache,
        swaptotal: data.swaptotal,
        swapused: data.swapused,
        swapfree: data.swapfree
    };

    return datasystem;
  }
}
