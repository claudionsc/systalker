import { Injectable, OnModuleInit } from "@nestjs/common";
import { Info } from "./class/getInfo";

const si = require('systeminformation')

@Injectable()
export class infoService implements OnModuleInit {
    async onModuleInit() {
        const getInfoInstance = new Info();

        return await getInfoInstance.get();
    }

    async get() {
        return console.log('GET')
    }
}