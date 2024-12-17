import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { SystemInfo } from "./SystemInfo.model";

@Table
export class MemoryLayout extends Model {
  @ForeignKey(() => SystemInfo)
  @Column({ type: DataType.INTEGER })
  systemInfoId: string;

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