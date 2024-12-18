import { Controller, Delete, Get, Param } from '@nestjs/common';
import { infoServiceCommand } from './info.service';
import { infoServiceQuery } from './info.service';

@Controller('system')
export class InfoController {
  constructor(
    private readonly infoServiceCommand: infoServiceCommand,
    private readonly infoServiceQuery: infoServiceQuery,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    return this.infoServiceQuery.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.infoServiceCommand.delete(id);
  }
}
