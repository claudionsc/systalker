import { Injectable, OnModuleInit } from "@nestjs/common";
import { info } from "./class/getInfo";

const si = require('systeminformation')

@Injectable()
export class infoService implements OnModuleInit {
    async onModuleInit() {
        const getInfoInstance = new info();

        return await getInfoInstance.get();
    }

    async get() {
        return console.log('GET')
    }
}