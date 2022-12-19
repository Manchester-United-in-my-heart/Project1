import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainerController } from './ctn/ctn.controller';
import { ContainerServices } from "./ctn/ctn.services";
import {CtnModule} from "./ctn/ctn.module";

@Module({
  imports: [ CtnModule ],
  controllers: [AppController, ContainerController],
  providers: [AppService,ContainerServices],
})
export class AppModule {}
