import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import documentRouter from "./modules/documents/document.router.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
const app = express();
const swaggerDocument = YAML.load(
  "./openapi/dist/openapi.bundle.yaml"
);
app.use(express.json());
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);
app.use("/api",documentRouter);
app.use(errorMiddleware);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});