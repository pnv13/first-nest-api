import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query,
} from '@nestjs/common'
import { CatsService } from './cats.service'
import { CreateCatDto, UpdateCatDto } from './dto'

@Controller('cats')
export class CatsController {
	constructor(private readonly catsService: CatsService) { }

	@Get()
	getCats(@Query('color') color: "wight" | "black") {
		return this.catsService.getCats(color)
	}

	@Get(':id')
	getCat(@Param('id') id: string) {
		return this.catsService.getCat(+id)
	}

	@Post()
	createCat(@Body() createCatDto: CreateCatDto) {
		return this.catsService.createCat(createCatDto)
	}

	@Put(':id')
	updateCat(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
		return this.catsService.updateCat(+id, updateCatDto)
	}

	@Delete(':id')
	removeCat(@Param('id') id: string) {
		return this.catsService.removeCat(+id)
	}
}
