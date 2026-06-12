import type { Document } from "@prisma/client";
import type { CreateDocumentResponseDto } from "./document.dto.js";
export class DocumentTransformer {
  static toCreateDocumentResponse(
    document: Document,
  ): CreateDocumentResponseDto {
    return {
      id: document.id,
      name: document.name,
      key: document.key,
    };
  }
}