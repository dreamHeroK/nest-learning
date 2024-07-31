import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ZodSchema } from "zod";

@Injectable()
export class ValidationPipe implements PipeTransform {
    constructor(private schema: ZodSchema) { }
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(metadata);
        try {
            return this.schema.parse(value);
        } catch (error) {
            throw new BadRequestException('validation failed')
        }
    }
}