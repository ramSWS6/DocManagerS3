import { randomUUID } from "crypto";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../../config/s3";
import { UploadSignatureRequestDto, UploadSignatureResponseDto } from "./document.dto";
import {CreateDocumentRequestDto, CreateDocumentResponseDto } from  "./document.dto";
import { DocumentRepository } from "./document.repository.js";
import { DocumentTransformer } from "./document.transformer.js";
export class DocumentService {
  async generateUploadSignature(
    payload: UploadSignatureRequestDto,
  ): Promise<UploadSignatureResponseDto> {
    try {
      const key = `documents/${randomUUID()}-${payload.fileName}`;
      const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: key,
        ContentType: payload.contentType,
      });
      const uploadUrl = await getSignedUrl(
        s3Client,
        command,
        { expiresIn: 300 },
      );
      return {
        uploadUrl,
        key,
      };
    } catch (error) {
      throw new Error("Failed to generate upload signature");
    }
  }

  constructor(
    private readonly documentRepository: DocumentRepository
  ) {}
  async createDocument(
    payload: CreateDocumentRequestDto,
  ): Promise<CreateDocumentResponseDto> {
    try {
      const document =
        await this.documentRepository.create({
          name: payload.name,
          mimeType: payload.mimeType,
          size: payload.size,
          key: payload.key,
        });

      return DocumentTransformer.toCreateDocumentResponse(
        document,
      );
    } catch (error) {
      throw new Error("Failed to create document");
    }
  }
}