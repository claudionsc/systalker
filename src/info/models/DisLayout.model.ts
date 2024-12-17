import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { SystemInfo } from "./SystemInfo.model";

@Table
export class DiskLayout extends Model {
  @ForeignKey(() => SystemInfo)
  @Column({ type: DataType.INTEGER })
  systemInfoId: string;

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