import { Table, ForeignKey, Column, DataType, BelongsTo, Model } from "sequelize-typescript";
import { SystemInfo } from "./SystemInfo.model";

@Table
export class NetworkInterfaces extends Model {
  @ForeignKey(() => SystemInfo)
  @Column({ type: DataType.INTEGER })
  systemInfoId: string;

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