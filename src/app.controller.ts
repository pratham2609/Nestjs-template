import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get()
  // getHello(): number {
  //   return this.appService.getHello();
  // }
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  // @Post()
  // postHello(): string {
  //   return this.appService.postHello();
  // }
}
