import {createContainer, asClass, InjectionMode} from "awilix";
import { DocumentService } from "./modules/documents/document.service.js";
import { DocumentController } from "./modules/documents/document.controller.js";
export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});
container.register({
  documentService: asClass(DocumentService).singleton(),
  documentController: asClass(DocumentController).singleton(),
});