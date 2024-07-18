import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class loggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Request query:${JSON.stringify(req.query)} ,body:${JSON.stringify(req.body)}`);
        next();
    }
}