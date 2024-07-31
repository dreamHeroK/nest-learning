import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CatDto, CreateCatDto } from './cats.dto';
import { Cat } from './interfaces/cats';

@Injectable()
export class CatsService {
    private readonly cats: CatDto[] = [];

    create(catDto: CreateCatDto) {
        this.cats.push(catDto);
    }

    findAll(): Cat[] {
        if (this.cats.length === 0) {
            throw new HttpException('No cats found', HttpStatus.NOT_FOUND);
        }
        return this.cats;
    }

    findOne(id: number): CatDto {
        return this.cats.find(cat => cat.id === id);
    }
}
