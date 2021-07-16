import { Router } from "express";
import { Category } from "../model/Category";
import { Categoriesrepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();

const categoriesRepository = new Categoriesrepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = categoriesRepository.create({name, description});

  return response.status(201).send();
})

export { categoriesRoutes };