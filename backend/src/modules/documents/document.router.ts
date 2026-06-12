import { Router } from "express";
import { DocumentController } from "./document.controller";
const router = Router();
import { container } from "../../container";
const documentController = container.resolve<DocumentController>("documentController");
router.post( "/documents/upload-signature", documentController.generateUploadSignature);
router.post( "/documents", documentController.createDocument);
export default router;