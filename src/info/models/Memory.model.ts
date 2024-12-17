import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { SystemInfo } from "./SystemInfo.model";

@Table
export class Memory extends Model {
  @ForeignKey(() => SystemInfo)
  @Column({ type: DataType.INTEGER })
  systemInfoId: string;

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