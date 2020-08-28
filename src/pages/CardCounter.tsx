import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItemDivider,
  IonLabel,
  IonButton,
  IonChip,
  IonIcon, 
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent} from '@ionic/react';
import { checkmark, close } from 'ionicons/icons';
import React from 'react';
import Card from '../components/Card';
import './CardCounter.css';

class CardCounter extends React.Component<{}, any> {

  constructor(props: any){
    super(props);
    this.state = {
      count: 0,
      cards: 0
    }
  }

  handleClickInc(){
    this.setState({
      count: this.state.count + 1,
      cards: this.state.cards + 1
    })
  }

  handleClickDec(){
    this.setState({
      count: this.state.count - 1,
      cards: this.state.cards + 1
    })
  }

  render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Card Counter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="light">
            <IonGrid>
              <IonRow>
                  <IonCol size="0.25"></IonCol>
                  <IonCol size="11.5">
                      <IonCard>
                          <IonCardContent>
                              This is the worst looking app for counting card on the Blackjack game.
                          </IonCardContent>
                      </IonCard>
                  </IonCol>
                  <IonCol size="0.25"></IonCol>
              </IonRow>
            </IonGrid>
            <IonItemDivider>
              <IonLabel className="ion-text-uppercase ion-padding-end ion-padding-start" color="dark">
                <b>Count:</b>
              </IonLabel>
              <IonLabel className="ion-text-uppercase ion-padding-end ion-padding-start"  color="dark">
                <b>{this.state.count}</b>
              </IonLabel>
              <IonLabel className="ion-text-uppercase  ion-padding-end ion-padding-start">
                <b>=</b>
              </IonLabel>
              <IonLabel className="ion-text-uppercase">
                { this.state.count > 0 ? (<IonChip color="success"><IonIcon icon={checkmark} /><IonLabel>Bet high</IonLabel></IonChip>) : (<IonChip color="danger"><IonIcon icon={close} /><IonLabel>Hold</IonLabel></IonChip>)}
              </IonLabel>
            </IonItemDivider>
            <IonItemDivider color="light">
              <IonLabel className="ion-text-uppercase ion-padding-start ion-padding-end" color="dark">
                <b>Cards:</b>
              </IonLabel>
              <IonLabel className="ion-text-uppercase ion-padding-start ion-padding-end"  color="dark">
                <b>{this.state.cards}</b>
              </IonLabel>
            </IonItemDivider >
            <IonGrid  className="ion-padding ion-margin-top ion-margin-bottom">
              <IonRow>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="2"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="3"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="4"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="5"/></IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="6"/></IonCol>              
                <IonCol size="3"><Card onClick={() => this.setState({ cards: this.state.cards + 1})} card_value="7"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.setState({ cards: this.state.cards + 1})} card_value="8"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.setState({ cards: this.state.cards + 1})} card_value="9"/></IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="10"/></IonCol>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="J"/></IonCol>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="Q"/></IonCol>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="K"/></IonCol>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="A"/></IonCol>
              </IonRow>
            </IonGrid>
            <IonButton onClick={() => this.setState({ count: 0, cards: 0})} color="dark" className="ion-padding ion-margin" expand="block" size="large">Reset counter</IonButton>
        </IonContent>
      </IonPage>
    );
  }
};

export default CardCounter;
