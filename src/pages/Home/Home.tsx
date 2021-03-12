import { IonContent, IonHeader, IonPage, IonToolbar, IonSearchbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import IngredientsContainer from '../../components/ingredientsContainer/ingredientsContainer';
import { IIngredients } from '../../models/ingredients';
import { getIngredients } from '../../services/ingredients.service';
import { searchOutline } from 'ionicons/icons'
import './Home.css';
import { RouteComponentProps, withRouter } from 'react-router';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  let ingredientsData = useRef<IIngredients[]>([]);
  let [ingredients, setIngredient] = useState<IIngredients[]>([]);
  let selectedIngredients: IIngredients[] = [];

  const handleSearchBar = async (ev: any) => {
    const value = ev.target?.value;
    if (value) {
      const data = ingredientsData
        .current
        .find(ingredient => ingredient.name.includes(value));
      if (data) {
        setIngredient([data]);
      } else {
        setIngredient([]);
      }
    } else {
      setIngredient([...ingredientsData.current])
    }
  }

  function handleClick(ingredient: IIngredients) {
    if (ingredient.checked) {
      selectedIngredients.push(ingredient);
    } else {
      const index = selectedIngredients.findIndex(query => query.name === ingredient.name);
      const temp = [...selectedIngredients.slice(0, index), ...selectedIngredients.slice(index + 1, selectedIngredients.length)];
      selectedIngredients = [...temp];
    }
  }

  function navigate() {
    if (selectedIngredients.length > 0) {
      history.push(`/home/recipe`, { direction: 'right', ingredients: selectedIngredients })
    }

  }

  useEffect(() => {
    if (ingredientsData.current.length === 0) {
      (async function genIngredients() {
        ingredientsData.current = await getIngredients();
        setIngredient(ingredientsData.current);
      })();
    }
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={navigate}>
              <IonIcon slot="icon-only" icon={searchOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar debounce={1000} onIonChange={ev => handleSearchBar(ev)} />
        <IngredientsContainer handleClick={handleClick} ingredients={ingredients} />
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Home);
