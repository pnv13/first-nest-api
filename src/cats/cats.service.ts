import { Injectable } from '@nestjs/common'
import { CreateCatDto, UpdateCatDto } from './dto'

@Injectable()
export class CatsService {
	private cats = [
		{ id: 0, name: "catA", color: "wight" },
		{ id: 1, name: "catB", color: "black" }
	]

	getCats(color?: "wight" | "black") {
		if (color) {
			return this.cats.filter((cat) => cat.color === color)
		}

		return this.cats
	}

	getCat(id: number) {
		const cat = this.cats.find((cat) => cat.id === id)

		if (!cat) throw new Error("Cat not found!")

		return cat
	}

	createCat(createCatDto: CreateCatDto) {
		const newCat = { id: Date.now(), ...createCatDto }
		this.cats.push(newCat)
		return newCat
	}

	updateCat(id: number, updateCatDto: UpdateCatDto) {
		this.cats = this.cats.map((cat) => {
			if (cat.id === id) {
				return { ...cat, ...updateCatDto }
			}

			return cat
		})

		return this.getCat(id)
	}

	removeCat(id: number) {
		const deletedCat = this.getCat(id)

		this.cats = this.cats.filter((cat) => cat.id !== id)

		return deletedCat
	}
}
