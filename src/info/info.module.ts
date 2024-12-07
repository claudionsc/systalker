import { Module } from "@nestjs/common";
import { infoService } from "./info.service";
import { InfoController } from "./info.controller";

@Module({
    imports: [],
      providers: [infoService],
      exports: [infoService],
      controllers: [InfoController]
})

export class InfoModule {}
