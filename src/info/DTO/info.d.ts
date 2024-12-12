export type SystemInfoDto = {
    system: {
        manufacturer: string;
        model: string;
        version: string;
        serial: string;
        uuid: string;
        sku: string;
    };
    cpu: {
        manufacturer: string;
        brand: string;
        speed: string;
        cores: number;
        physicalCores: number;
        processors: number;
    };
    memory: {
        total: number;
        free: number;
        used: number;
        active: number;
        available: number;
        buffcache: number;
        swaptotal: number;
        swapused: number;
        swapfree: number;
    };
    memoryLayout: Array<{
        size: number;
        type: string;
        clockSpeed: number;
        manufacturer: string;
        partNum: string;
        serialNum: string;
        voltageConfigured: number;
        voltageMin: number;
        voltageMax: number;
    }>;
    os: {
        platform: string;
        distro: string;
        release: string;
        codename: string;
        kernel: string;
        arch: string;
        hostname: string;
        fqdn: string;
    };
    diskLayout: Array<{
        type: string;
        name: string;
        vendor: string;
        size: number;
        bytesPerSector: number;
        totalCylinders: number;
        totalHeads: number;
        totalSectors: number;
        totalTracks: number;
        sectorsPerTrack: number;
        firmwareRevision: string;
        serialNum: string;
        interfaceType: string;
        smartStatus: string;
    }>;
    networkInterfaces: {
        iface: string;
        ip4: string;
        ip6: string;
        mac: string;
        internal: boolean;
    };
}
