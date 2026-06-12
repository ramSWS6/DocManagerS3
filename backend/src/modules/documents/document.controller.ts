import { Request, Response, NextFunction } from "express";
import { DocumentService } from "./document.service.js";
export class DocumentController {
    constructor(
    private readonly documentService: DocumentService,
  ) {}
  generateUploadSignature = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const response =
        await this.documentService.generateUploadSignature(
          req.body,
        );
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
}