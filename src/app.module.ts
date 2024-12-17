import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { SequelizeModule } from '@nestjs/sequelize';

require('dotenv').config()

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: process.env.DATABASE_URL,
    
      dialectOptions: {
        ssl: {
          require: true, 
          rejectUnauthorized: false, 
        },
      },
      logging: true,
      autoLoadModels: true,
      synchronize: true,
    }),
    InfoModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
