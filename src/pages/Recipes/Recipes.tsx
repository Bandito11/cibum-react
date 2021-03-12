import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import RecipesContainer from "../../components/recipesContainer/recipesContainer";
import { IIngredients } from "../../models/ingredients";
import { IRecipe } from "../../models/recipes";
import { getRecipes } from "../../services/recipes.service";
import { RouteComponentProps, useLocation, withRouter } from 'react-router';

const Recipes: React.FC<RouteComponentProps> = ({history}) => {
    let [recipes, setRecipes] = useState<IRecipe[]>([]);
    let recipesData = useRef<IRecipe[]>([]);
    const location = useLocation<{ ingredients: IIngredients[] }>();

    useEffect(() => {

        if (recipesData.current.length === 0) {
            (async function genRecipes() {
                recipesData.current = await getRecipes(location.state?.ingredients);
                setRecipes(recipesData.current);
            })()
        }
    });
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Recipes</IonTitle>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <RecipesContainer history={history} recipes={recipes} />
            </IonContent>
        </IonPage>
    )
}

export default withRouter(Recipes);