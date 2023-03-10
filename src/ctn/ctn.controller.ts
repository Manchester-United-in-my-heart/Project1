import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ContainerServices } from "./ctn.services";
import { Element, Query } from "./ModulesFile";

@Controller("container")
export class ContainerController {
  constructor(private readonly appService: ContainerServices) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(":id")
  getElement(@Param("id") id: string) {
    return this.appService.getElement(id);
  }

  @Post("pool")
  postPool(@Body() body: Element) {
    return this.appService.postElement(body);
  }

  @Post("quantile1")
  postQuery1(@Body() body: Query) {
    return this.appService.Calculate1(body);
  }

  @Post("quantile2")
  postQuery2(@Body() body: Query) {
    return this.appService.Calculate2(body);
  }
}
