import { randomUUID } from "crypto";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../../config/s3.js";
import {UploadSignatureRequestDto,UploadSignatureResponseDto} from "./document.dto.js";
export class DocumentService {
    async generateUploadSignature(payload:UploadSignatureRequestDto):Promise<UploadSignatureResponseDto>{
        const key = `documents/${randomUUID()}-${payload.fileName}`;
        const command = new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME!,
            Key: key,
            ContentType: payload.contentType
        });
        const uploadUrl = await getSignedUrl(
            s3Client,command, { expiresIn: 300}
        );
        return {uploadUrl,key};

    }
}