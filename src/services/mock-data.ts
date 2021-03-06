import { IIngredients } from "../models/ingredients";
import { IRecipe } from "../models/recipes";

export const INGREDIENTS: IIngredients[] = [
    { "name": "huevos", "image": "https://www.hacktheunion.org/wp-content/uploads/2017/09/whole-egg.jpg", "checked": false },
    { "name": "mayonesa", "image": "http://assets.epicurious.com/photos/579795f120ada1484ddf2fdb/master/pass/mayonnaise.jpg", "checked": false }
];

export const RECIPES: IRecipe[] = [
    {
        "name": "Ensalada de Huevo",
        "image": "./img/ensalada-de-huevos.jpg",
        "ingredients": [
            {
                "name": "huevos",
                "image": "https://www.hacktheunion.org/wp-content/uploads/2017/09/whole-egg.jpg",
                "checked": true
            }, {
                "name": "mayonesa",
                "image": "http://assets.epicurious.com/photos/579795f120ada1484ddf2fdb/master/pass/mayonnaise.jpg",
                "checked": true
            }
        ],
        "steps": [
            "En una olla mediana, echarle agua dentro de ésta.",
            "Sin romper el cascarón echar adentro de la olla los huevos que se quieran consumir.",
            "Calentar en una estufa a fuego alto por 20 minutos.",
            "Con una cucharada de mayonesa mezclar con el huevo hasta que se vea de un color amarillento.",
            "Despues de esto se puede mezclar con cualquier verdura que quiera o comérselo en un empaderado."

        ]
    },
    {
        "name": "Revoltillo de Huevo",
        "image": "https://thumbs.dreamstime.com/z/revoltillo-de-huevos-scrambled-eggs-la-dominicana-mexican-food-recipes-revoltillo-de-huevos-scrambled-eggs-la-dominicana-106976755.jpg",
        "ingredients": [
            {
                "name": "huevos",
                "image": "https://www.hacktheunion.org/wp-content/uploads/2017/09/whole-egg.jpg",
                "checked": true
            }
        ],
        "steps": [
            "Romper el cascarón y echar el huevo en un plato hondo.",
            "Con un tenedor, batir el huevo hasta que la yema este mezclado completamente con la clara",
            "En un sartén a temperatura mediana, echar el huevo dentro de ésta, utilizando una éspatula para moverla.",
            "Cuando el huevo tenga un color amarillo oscura y se vea sólida sacarla del sárten y consumir."
        ]
    }
];