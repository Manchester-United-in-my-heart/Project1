import { Module } from '@nestjs/common';
import { ContainerController } from "./ctn.controller";
import { ContainerServices } from "./ctn.services";

@Module({
  controllers:[ContainerController],
  providers:[ContainerServices]
})
export class CtnModule {}
