import { Request, Response, NextFunction } from "express";
import { ErrorResponseDto } from "../modules/documents/document.dto.js";
export function errorMiddleware( error: Error, req: Request, res: Response, next: NextFunction ): void 
{
  const response: ErrorResponseDto = {
    message: error.message,
  };

  res.status(500).json(response);
}