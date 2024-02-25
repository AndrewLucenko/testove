import {Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ADD_MOCKService} from "./ADD_MOCK.service";
import {ProductsInterface} from "../../Interfase/Products.interface";

@Controller()
export class ADD_MOCKController {
  constructor(private readonly mock: ADD_MOCKService) {}

  @Get('ADD_MOCK')
  async getProduct(): Promise<void> {
    return await this.mock.createMock();
  }
}
