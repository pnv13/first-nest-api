import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Get()
  getCats(@Query('type') type: string) {
    return [{ type }];
  }

  @Get(':id')
  getCat(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return {
      name: createCatDto.name,
    };
  }

  @Put('id')
  updateCat(@Param('id') id: string) {
    return { id };
  }

  @Delete('id')
  removeCat(@Param('id') id: string) {
    return { id };
  }
}
