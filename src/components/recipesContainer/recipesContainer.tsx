import { IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import React from "react";
import { IRecipe } from "../../models/recipes";

function RecipesContainer(props: { recipes: IRecipe[], history: any }) {
    function handleClick(recipe: IRecipe) {
        props.history.push('/home/recipe/info', {recipe: recipe})
    }
    return (
        <IonList>
            {
                props.recipes.map((recipe, index) =>
                    <IonCard key={index} onClick={() => handleClick(recipe)}>
                        <IonCardHeader>
                            <IonCardTitle>
                                {recipe.name}
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <img src={recipe.image} alt={`${recipe.name}`} />
                        </IonCardContent>
                    </IonCard>
                )
            }
        </IonList>
    )
}

export default RecipesContainer;