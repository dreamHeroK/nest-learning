import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
    @Get()
    getCatName(@Req() req) {
        return 'black cat tommy'
    }

    @Post()
    create(@Body() catDto: CatDto): string {
        return 'create cat'
    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params, params.id)
        return `findd ${params.id} cat`
    }
}
