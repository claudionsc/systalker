import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
  } from 'sequelize-typescript';
  
  @Table
  export class SystemInfo extends Model {
    @Column({ type: DataType.STRING })
    manufacturer: string;
  
    @Column({ type: DataType.STRING })
    model: string;
  
    @Column({ type: DataType.STRING })
    version: string;
  
    @Column({ type: DataType.STRING })
    serial: string;
  
    @Column({ type: DataType.STRING })
    uuid: string;
  
    @HasMany(() => CPU)
    cpu: CPU[];
  
    @HasMany(() => Memory)
    memory: Memory[];
  
    @HasMany(() => MemoryLayout)
    memoryLayout: MemoryLayout[];
  
    @HasMany(() => OS)
    os: OS[];
  
    @HasMany(() => DiskLayout)
    diskLayout: DiskLayout[];
  
    @HasMany(() => NetworkInterfaces)
    networkInterfaces: NetworkInterfaces[];
  }
  
  @Table
  export class CPU extends Model {
    @ForeignKey(() => SystemInfo)
    @Column({ type: DataType.INTEGER })
    systemInfoId: number;
  
    @Column({ type: DataType.STRING })
    manufacturer: string;
  
    @Column({ type: DataType.STRING })
    brand: string;
  
    @Column({ type: DataType.STRING })
    speed: string;
  
    @Column({ type: DataType.INTEGER })
    cores: number;
  
    @Column({ type: DataType.INTEGER })
    physicalCores: number;
  
    @Column({ type: DataType.INTEGER })
    processors: number;
  
    @BelongsTo(() => SystemInfo)
    systemInfo: SystemInfo;
  }
  
  @Table
  export class Memory extends Model {
    @ForeignKey(() => SystemInfo)
    @Column({ type: DataType.INTEGER })
    systemInfoId: number;
  
    @Column({ type: DataType.BIGINT })
    total: number;
  
    @Column({ type: DataType.BIGINT })
    free: number;
  
    @Column({ type: DataType.BIGINT })
    used: number;
  
    @Column({ type: DataType.BIGINT })
    active: number;
  
    @Column({ type: DataType.BIGINT })
    available: number;
  
    @Column({ type: DataType.BIGINT })
    buffcache: number;
  
    @Column({ type: DataType.BIGINT })
    swaptotal: number;
  
    @Column({ type: DataType.BIGINT })
    swapused: number;
  
    @Column({ type: DataType.BIGINT })
    swapfree: number;
  
    @BelongsTo(() => SystemInfo)
    systemInfo: SystemInfo;
  }
  
  @Table
  export class MemoryLayout extends Model {
    @ForeignKey(() => SystemInfo)
    @Column({ type: DataType.INTEGER })
    systemInfoId: number;
  
    @Column({ type: DataType.BIGINT })
    size: number;
  
    @Column({ type: DataType.STRING })
    type: string;
  
    @Column({ type: DataType.INTEGER })
    clockSpeed: number;
  
    @Column({ type: DataType.STRING })
    manufacturer: string;
  
    @Column({ type: DataType.STRING })
    partNum: string;
  
    @Column({ type: DataType.STRING })
    serialNum: string;
  
    @BelongsTo(() => SystemInfo)
    systemInfo: SystemInfo;
  }
  
  @Table
  export class OS extends Model {
    @ForeignKey(() => SystemInfo)
    @Column({ type: DataType.INTEGER })
    systemInfoId: number;
  
    @Column({ type: DataType.STRING })
    platform: string;
  
    @Column({ type: DataType.STRING })
    distro: string;
  
    @Column({ type: DataType.STRING })
    release: string;
  
    @Column({ type: DataType.STRING })
    codename: string;
  
    @Column({ type: DataType.STRING })
    kernel: string;
  
    @Column({ type: DataType.STRING })
    arch: string;
  
    @Column({ type: DataType.STRING })
    hostname: string;
  
    @Column({ type: DataType.STRING })
    serial: string;
  
    @BelongsTo(() => SystemInfo)
    systemInfo: SystemInfo;
  }
  
  @Table
  export class DiskLayout extends Model {
    @ForeignKey(() => SystemInfo)
    @Column({ type: DataType.INTEGER })
    systemInfoId: number;
  
    @Column({ type: DataType.STRING })
    type: string;
  
    @Column({ type: DataType.STRING })
    name: string;
  
    @Column({ type: DataType.STRING })
    vendor: string;
  
    @Column({ type: DataType.BIGINT })
    size: number;
  
    @Column({ type: DataType.INTEGER })
    bytesPerSector: number;
  
    @Column({ type: DataType.STRING })
    firmwareRevision: string;
  
    @Column({ type: DataType.STRING })
    serialNum: string;
  
    @Column({ type: DataType.STRING })
    interfaceType: string;
  
    @Column({ type: DataType.STRING })
    smartStatus: string;
  
    @BelongsTo(() => SystemInfo)
    systemInfo: SystemInfo;
  }
  
  @Table
  export class NetworkInterfaces extends Model {
    @ForeignKey(() => SystemInfo)
    @Column({ type: DataType.INTEGER })
    systemInfoId: number;
  
    @Column({ type: DataType.STRING })
    iface: string;
  
    @Column({ type: DataType.STRING })
    ip4: string;
  
    @Column({ type: DataType.STRING })
    ip6: string;
  
    @Column({ type: DataType.STRING })
    mac: string;
  
    @Column({ type: DataType.BOOLEAN })
    internal: boolean;
  
    @BelongsTo(() => SystemInfo)
    systemInfo: SystemInfo;
  }
  