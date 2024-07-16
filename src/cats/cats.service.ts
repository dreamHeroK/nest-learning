import { Injectable } from '@nestjs/common';
import { CatDto } from './cats.dto';
import { Cat } from './interfaces/cats';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(catDto: CatDto) {
        this.cats.push(catDto);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    findOne(id: number): CatDto {
        return this.cats.find(cat => cat.id === id);
    }
}
