import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { SystemInfo } from "./SystemInfo.model";

@Table
export class CPU extends Model {
  @ForeignKey(() => SystemInfo)
  @Column({ type: DataType.INTEGER })
  systemInfoId: string;

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