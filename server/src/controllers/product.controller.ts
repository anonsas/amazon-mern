import { Request, Response, NextFunction } from "express";
import * as fs from "fs";

class ProductController {
  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const productsData = JSON.parse(fs.readFileSync("src/data/Products.json", "utf-8"));
      res.json(productsData);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductController();
