import { IonItem, IonLabel } from "@ionic/react";
import React from "react";

function StepsContainer(props: { steps: string[] }) {

    return (
        <>
            {
                props.steps?.map((step, index) =>
                    <IonItem key={index} lines="none">
                        <IonLabel className="ion-text-wrap">
                            {index + 1}. {step}
                        </IonLabel>
                    </IonItem>
                )
            }
        </>
    )
}
export default StepsContainer;