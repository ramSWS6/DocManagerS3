import { Router } from "express";
import { DocumentController } from "./document.controller.js";
const router = Router();
import { container } from "../../container.js";
const documentController = container.resolve<DocumentController>("documentController");
router.post( "/documents/upload-signature", documentController.generateUploadSignature);
export default router;