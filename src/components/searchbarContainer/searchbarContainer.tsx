import { IonSearchbar } from "@ionic/react";
import React from "react";

const handleSearchBar = (ev: any) => {
    console.log(ev.target['value']);
}

const SearchBarContainer: React.FC = () => {
    return (
        <IonSearchbar debounce={1000} onIonChange={ev => handleSearchBar(ev)} />
    );
}

export default SearchBarContainer;
