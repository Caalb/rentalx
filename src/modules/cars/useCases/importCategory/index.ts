import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryCoroller = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryCoroller };
