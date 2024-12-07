import { Injectable, OnModuleInit } from "@nestjs/common";
import { getInfo } from "./class/getInfo";

const si = require('systeminformation')

@Injectable()
export class infoService implements OnModuleInit {
    async onModuleInit() {
        const getInfoInstance = new getInfo();

        return await getInfoInstance.get();
    }

    async get() {
        return console.log('GET')
    }
}