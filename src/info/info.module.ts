import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { InfoSeeder } from './info.service';
import { infoServiceCommand } from './info.service';
import { infoServiceQuery } from './info.service';
import { SystemInfo } from './models/SystemInfo.model';
import { CPU } from './models/Cpu.models';
import { Memory } from './models/Memory.model';
import { MemoryLayout } from './models/MemoryLayout.model';
import { OS } from './models/OS.model';
import { DiskLayout } from './models/DisLayout.model';
import { NetworkInterfaces } from './models/NetworkInterfaces.model';
import { InfoController } from './info.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([
      SystemInfo,
      CPU,
      Memory,
      MemoryLayout,
      OS,
      DiskLayout,
      NetworkInterfaces
    ]),
  ],
  controllers:[InfoController],
  providers: [InfoSeeder, infoServiceCommand, infoServiceQuery],
  exports: [infoServiceQuery],
})
export class InfoModule {}
