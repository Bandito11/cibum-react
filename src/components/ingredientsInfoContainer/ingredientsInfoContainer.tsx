import { IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { IIngredients } from "../../models/ingredients";

function IngredientsInfoContainer(props: { ingredients: IIngredients[] }) {
    return (
        <>
            {
                props.ingredients?.map((ingredient, index) =>
                    <IonItem key={index} lines="none">
                        <IonThumbnail slot="start">
                            <img src={ingredient.image} alt={`${ingredient.name}.`} />
                        </IonThumbnail>
                        <IonLabel >{ingredient.name}</IonLabel>
                    </IonItem>
                )
            }
        </>
    );

}

export default IngredientsInfoContainer;