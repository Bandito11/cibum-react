import { IonCheckbox, IonItem, IonLabel, IonList, IonThumbnail } from "@ionic/react";
import { IIngredients } from "../../models/ingredients";

function IngredientsContainer(props: { ingredients: IIngredients[], handleClick: any }) {
    return (
        <IonList>
            {
                props.ingredients.map((ingredient, index) =>
                    <IonItem key={index}>
                        <IonThumbnail slot="start">
                            <img src={ingredient.image} alt={`Imagen de ${ingredient.name}.`} />
                        </IonThumbnail>
                        <IonLabel>{ingredient.name}</IonLabel>
                        <IonCheckbox onIonChange={ev => ingredient.checked = ev.detail.checked} checked={ingredient.checked} onClick={() => props.handleClick(ingredient)} />
                    </IonItem>
                )
            }
        </IonList>
    );

}

export default IngredientsContainer;