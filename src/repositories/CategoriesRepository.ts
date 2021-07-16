import { Category } from "../model/Category";
import { categoriesRoutes } from "../routes/categories.routes";

interface ICreateCategoryDTO {
  name: string,
  description: string
}

class Categoriesrepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }
  
  create({name, description}: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string) {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { Categoriesrepository };