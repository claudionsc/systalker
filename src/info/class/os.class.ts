import { SystemInfoDto } from "../DTO/info";

const si = require('systeminformation');

export class os {
  async get() {
    const data = await si.osInfo();

    const datasystem: SystemInfoDto["os"] = {
        platform: data.platform,
        distro: data.distro,
        release: data.release,
        codename: data.codename,
        kernel: data.kernel,
        arch: data.arch,
        hostname: data.hostname,
        serial: data.serial
        
    };

    return datasystem;
  }
}
