import { IIngredients } from "../models/ingredients";

export function getIngredients(): Promise<IIngredients[]> {
    return new Promise((resolve) => {
        fetch('assets/ingredients.data.json')
            .then(data => data.json())
            .then(data => resolve(data))
    });
}