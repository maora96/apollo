import { Request, Response } from "express";
import { productRepository } from "../repositories/productRepository";
import { categoryRepository } from "../repositories/categoryRepository";

export class ProductController {
  async create(req: Request, res: Response) {
    const { name, description, color, price, category_id } = req.body;

    if (!name || !description || !color || !price || !category_id) {
      res.status(400).json({ message: "All fields are required." });
    }

    try {
      const category = await categoryRepository.findOneBy({
        id: Number(category_id),
      });

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      const discount = price * (category.discount / 10);

      const newProduct = productRepository.create({
        name,
        description,
        color,
        price,
        promotional_price: price - discount,
        category,
      });

      await productRepository.save(newProduct);

      return res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const products = await productRepository.find({
        relations: {
          category: true,
        },
      });

      return res.status(200).json({ products });
    } catch (error) {}
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const product = await productRepository.findOneBy({ id: Number(id) });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      await productRepository.delete(product);

      return res.status(200).json({ message: "Product deleted." });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}
