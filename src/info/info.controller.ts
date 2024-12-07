import { Controller, Get } from "@nestjs/common";
import { infoService } from "./info.service";

@Controller()
export class InfoController {
    constructor(private readonly infoService: infoService){}

    @Get()
    async findAll(): Promise<any>{
        return this.infoService.get()
    }
}