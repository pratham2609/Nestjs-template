import { Body, Controller, Get, Param, Post } from '@nestjs/common';
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns a cat bc';
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
