import { Request, Response, NextFunction } from "express";
export function errorMiddleware( error: Error, req: Request, res: Response, next: NextFunction ): void 
{
  res.status(500).json({
    message: error.message || "Internal Server Error",
  });
}