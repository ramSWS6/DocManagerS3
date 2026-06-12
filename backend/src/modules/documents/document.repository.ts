import { prisma } from "../../config/prisma.js";
import type { Prisma } from "@prisma/client";
export class DocumentRepository {
  async create(data: Prisma.DocumentCreateInput) {
    return prisma.document.create({
      data
    });
  }
}