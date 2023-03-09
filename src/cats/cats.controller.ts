import {
	Body,
	Controller,
	Delete,
	Get,
	NotFoundException,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
	UseGuards,
	ValidationPipe,
} from '@nestjs/common'
import { BeltGuard } from 'src/belt/belt.guard'
import { CatsService } from './cats.service'
import { CreateCatDto, UpdateCatDto } from './dto'

@Controller('cats')
@UseGuards(BeltGuard)
export class CatsController {
	constructor(private readonly catsService: CatsService) { }

	@Get()
	getCats(@Query('color') color: "wight" | "black") {
		return this.catsService.getCats(color)
	}

	@Get(':id')
	getCat(@Param('id', ParseIntPipe) id: number) {
		try {
			return this.catsService.getCat(id)
		} catch (error) {
			throw new NotFoundException()
		}
	}

	@Post()
	createCat(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
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
