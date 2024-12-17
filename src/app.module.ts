import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'admin',
      database: 'systalker',
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
