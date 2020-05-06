import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(`Request for ${req.path}`);
    next();
  }
}