import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
  } from 'sequelize-typescript';
import { CPU } from './Cpu.models';
import { DiskLayout } from './DisLayout.model';
import { Memory } from './Memory.model';
import { MemoryLayout } from './MemoryLayout.model';
import { NetworkInterfaces } from './NetworkInterfaces.model';
import { OS } from './OS.model';
  
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
  