import { Request, Response } from "express";
import { categoryRepository } from "../repositories/categoryRepository";

export class CategoryController {
  async create(req: Request, res: Response) {
    const { product_type, discount } = req.body;

    if (!product_type || !discount) {
      res.status(400).json({ message: "All fields are required." });
    }

    try {
      const newCategory = categoryRepository.create({
        product_type,
        discount,
      });

      await categoryRepository.save(newCategory);

      return res.status(201).json(newCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const categories = await categoryRepository.find({
        relations: {
          products: true,
        },
      });

      return res.status(200).json(categories);
    } catch (error) {}
  }
}
