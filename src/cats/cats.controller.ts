import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { CatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
    @Get()
    getCatName(@Req() req) {
        return 'black cat tommy'
    }

    @Post('create')
    create(@Body() catDto: CatDto): string {
        console.log(catDto,'catDto')
        return 'create cat'
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
