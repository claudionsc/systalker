import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SystemInfo } from './models/SystemInfo.model';
import { Sequelize } from 'sequelize-typescript';
import { SystemInfoDto } from './DTO/info';
import { Info } from './class/getInfo.class';
import { CPU } from './models/Cpu.models';
import { Memory } from './models/Memory.model';
import { MemoryLayout } from './models/MemoryLayout.model';
import { OS } from './models/OS.model';
import { DiskLayout } from './models/DisLayout.model';
import { NetworkInterfaces } from './models/NetworkInterfaces.model';

@Injectable()
export class InfoSeeder {
  constructor(
    @InjectModel(SystemInfo)
    private readonly SystemInfoModel: typeof SystemInfo,
    @InjectModel(CPU)
    private readonly CpuModel: typeof CPU,
    @InjectModel(Memory)
    private readonly MemoryModel: typeof Memory,
    @InjectModel(MemoryLayout)
    private readonly MemoryLayoutModel: typeof MemoryLayout,
    @InjectModel(OS)
    private readonly OsModel: typeof OS,
    @InjectModel(DiskLayout)
    private readonly DiskLayoutModel: typeof DiskLayout,
    @InjectModel(NetworkInterfaces)
    private readonly NetworkInterfacesModel: typeof NetworkInterfaces,

    private readonly sequelize: Sequelize,
  ) {}

  async seedDatabase(systemInfo: SystemInfoDto): Promise<void> {
  try {
    await this.sequelize.transaction(async (t) => {
      const transactionHost = { transaction: t };

      // Criar o registro principal em SystemInfo
      const systemInfoInstance = await this.SystemInfoModel.create(
        {
          manufacturer: systemInfo.system.manufacturer,
          model: systemInfo.system.model,
          version: systemInfo.system.version,
          serial: systemInfo.system.serial,
          uuid: systemInfo.system.uuid,
        },
        transactionHost
      );

      // Relacionar os dados de CPU
      await this.CpuModel.create(
        {
          systemInfoId: systemInfoInstance.id,
          ...systemInfo.cpu,
        },
        transactionHost
      );

      // Relacionar os dados de memória
      await this.MemoryModel.create(
        {
          systemInfoId: systemInfoInstance.id,
          ...systemInfo.memory,
        },
        transactionHost
      );

      // Relacionar os dados do layout de memória (múltiplos registros)
      if (systemInfo.memoryLayout && systemInfo.memoryLayout.length > 0) {
        const memoryLayoutData = systemInfo.memoryLayout.map((memory) => ({
          systemInfoId: systemInfoInstance.id,
          ...memory,
        }));
        await this.MemoryLayoutModel.bulkCreate(memoryLayoutData, transactionHost);
      }

      // Relacionar os dados do sistema operacional
      await this.OsModel.create(
        {
          systemInfoId: systemInfoInstance.id,
          ...systemInfo.os,
        },
        transactionHost
      );

      // Relacionar os dados de layout de discos (múltiplos registros)
      if (systemInfo.diskLayout && systemInfo.diskLayout.length > 0) {
        const diskLayoutData = systemInfo.diskLayout.map((disk) => ({
          systemInfoId: systemInfoInstance.id,
          ...disk,
        }));
        await this.DiskLayoutModel.bulkCreate(diskLayoutData, transactionHost);
      }

      // Relacionar os dados de interfaces de rede
      await this.NetworkInterfacesModel.create(
        {
          systemInfoId: systemInfoInstance.id,
          ...systemInfo.networkInterfaces,
        },
        transactionHost
      );
    });
    console.log('Dados inseridos com sucesso!');
  } catch (err) {
    console.error('Erro ao criar dados', err);
  }
}

}

@Injectable()
export class infoServiceQuery {
  constructor(
    @InjectModel(SystemInfo) private readonly InfoModel: typeof SystemInfo,
  ) {}

  async findAll(): Promise<SystemInfo[]> {
    return this.InfoModel.findAll({
      include: [
        {
          model: CPU,
        },
        {
          model: Memory,
        },
        {
          model: MemoryLayout,
        },
        {
          model: OS,
        },
        {
          model: DiskLayout,
        },
        {
          model: NetworkInterfaces,
        },
      ],
    });
  }
}

@Injectable()
export class infoServiceCommand implements OnModuleInit {
  constructor(
    @InjectModel(SystemInfo)
    private readonly InfoModel: typeof SystemInfo,
    @InjectModel(CPU)
    private readonly CpuModel: typeof CPU,
    @InjectModel(Memory)
    private readonly MemoryModel: typeof Memory,
    @InjectModel(MemoryLayout)
    private readonly MemoryLayoutModel: typeof MemoryLayout,
    @InjectModel(OS)
    private readonly OsModel: typeof OS,
    @InjectModel(DiskLayout)
    private readonly DiskLayoutModel: typeof DiskLayout,
    @InjectModel(NetworkInterfaces)
    private readonly NetworkInterfacesModel: typeof NetworkInterfaces,
    private readonly sequelize: Sequelize,
    private readonly infoSeeder: InfoSeeder, 
  ) {}

  async onModuleInit() {
    const infoInstance = new Info();
    const infoData = await infoInstance.get();

    try {
      console.log('Inicializando dados padrão...');
      await this.infoSeeder.seedDatabase(infoData); 
    } catch(err) {
      console.log('Dados já existentes no banco.', err);
    }
  }

  async delete(id: number): Promise<void>{
    try{
      await this.InfoModel.destroy({
        where: {id}
      })
    }catch(error){
      console.log('Não foi possível deletar', error)
    }
  }
}


