import { Injectable, OnModuleInit } from "@nestjs/common";

const si = require('systeminformation')

@Injectable()
export class infoService implements OnModuleInit {
    async onModuleInit() {
        return si.system().then(data => console.log(data));
    }

    async get() {
        return console.log('GET')
    }
}