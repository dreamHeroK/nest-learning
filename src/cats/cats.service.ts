import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat, CatDto, CreateCatDto } from './cats.dto';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(catDto: CreateCatDto) {
        this.cats.push({ ...catDto, id: this.cats.length + 1 });
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
