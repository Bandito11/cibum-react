import { IIngredients } from "../models/ingredients"
import { IRecipe } from "../models/recipes";

export function getRecipes(ingredients: IIngredients[] = []): Promise<IRecipe[]> {
    return new Promise((resolve, reject) => {
        fetch('assets/recipes.data.json')
            .then(data => data.status >= 200 && data.status <= 399 ? data.json() : reject(`Couldn't find data`))
            .then(data => resolve(data))
    });
}