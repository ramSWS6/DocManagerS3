import {createContainer, asClass, InjectionMode} from "awilix";
import { DocumentService } from "./modules/documents/document.service";
import { DocumentController } from "./modules/documents/document.controller";
import { DocumentRepository } from "./modules/documents/document.repository";
export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});
container.register({
  documentService: asClass(DocumentService).singleton(),
  documentController: asClass(DocumentController).singleton(),
  documentRepository: asClass(DocumentRepository).singleton()
});