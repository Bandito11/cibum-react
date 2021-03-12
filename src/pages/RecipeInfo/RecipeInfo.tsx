import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import IngredientsInfoContainer from "../../components/ingredientsInfoContainer/ingredientsInfoContainer";
import StepsContainer from "../../components/StepsContainer/stepsContainer";
import { useLocation } from 'react-router';
import { IRecipe, Recipe } from "../../models/recipes";

const RecipeInfo: React.FC = () => {
    const location = useLocation<{ recipe: IRecipe }>();
    let recipe: IRecipe = new Recipe();
    recipe = { ...location.state?.recipe };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{recipe.name}</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home/recipe" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList lines="none">
                    <IonItem>
                        <img src={recipe.image} alt={recipe.name} />
                    </IonItem>
                    <IonItem>
                        <h2>
                            Ingredientes
                        </h2>
                    </IonItem>
                    <IngredientsInfoContainer ingredients={recipe.ingredients} />
                    <IonItem>
                        <h2>
                            Pasos
                        </h2>
                    </IonItem>
                    <StepsContainer steps={recipe.steps} />
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default RecipeInfo;