import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { CatDto, CreateCatDto, createCateScheme } from './cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }


    @Get()
    getCatName(@Req() req) {
        return 'black cat tommy'
    }

    @Post('create')
    @UsePipes(new ValidationPipe(createCateScheme))
    create(@Body() catDto: CreateCatDto): void {
        this.catsService.create(catDto)
    }

    @Get('findAll')
    async findAll(): Promise<CatDto[]> {
        return this.catsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: any): string {
        return `findd ${id} cat`
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `remove ${id} cat`
    }

}
