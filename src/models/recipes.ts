import { IIngredients } from "./ingredients";

export interface IRecipe {
    name: string;
    ingredients: IIngredients[];
    image: string;
    steps: string[];
}

export class Recipe implements IRecipe {
    name: string;
    ingredients: IIngredients[];
    image: string;
    steps: string[];

    constructor() {
        this.name = '';
        this.ingredients = [];
        this.image = '';
        this.steps = [];
    }

}