import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AppService } from './app.service';
import { Element, Query } from "./ctn/ModulesFile";
import { query } from "express";
import { type } from "os";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello()
  {
    return this.getHello();
  }
}
