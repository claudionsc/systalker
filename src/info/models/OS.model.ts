import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { SystemInfo } from "./SystemInfo.model";

@Table
  export class OS extends Model {
    @ForeignKey(() => SystemInfo)
    @Column({ type: DataType.INTEGER })
    systemInfoId: string;
  
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
  