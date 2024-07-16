import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { CatDto } from './cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }


    @Get()
    getCatName(@Req() req) {
        return 'black cat tommy'
    }

    @Post('create')
    create(@Body() catDto: CatDto): void {
        this.catsService.create(catDto)
    }

    @Get('findAll')
    async findAll(): Promise<CatDto[]> {
        return this.catsService.findAll()
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params, params.id)
        return `findd ${params.id} cat`
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `remove ${id} cat`
    }

}
