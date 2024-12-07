import { Controller, Get } from "@nestjs/common";
import { infoService } from "./info.service";
import { getInfo } from "./class/getInfo";

@Controller()
export class InfoController {
    constructor(private readonly infoService: infoService){}

    @Get()
    async findAll(): Promise<any>{
        
        const infoInstance = new getInfo();

        return await infoInstance.get();
    }
}