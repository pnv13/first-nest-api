import { IsEnum, MinLength } from "class-validator"

export class CreateCatDto {
	@MinLength(3)
	name: string
	@IsEnum(["wight", "black"], { message: "Use correct color" })
	color: "wight" | "black"
}
