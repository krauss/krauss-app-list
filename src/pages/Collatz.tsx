import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
    IonCard, IonCardContent, IonLabel, IonInput, IonItem, 
    IonButton, IonGrid, IonRow,
    IonCol, IonButtons, IonMenuButton  } from '@ionic/react';
import React from 'react';
import './Collatz.css';
import { list } from 'ionicons/icons';

class Collatz extends React.Component<{}, any> {

    constructor(props: any){
        super(props);
        this.state = {
            positive_number: "",
            list: []
        }
    }

    calculateConjecture() {    
       /* var c0 = this.state.positive_number

        while (c0 != 1) {
            if (c0 % 2 == 0){
                c0 = c0 / 2
                list.push()
                steps += 1
            } else if (c0 % 2) {
                c0 = (3 * c0) + 1
                //print(c0)
                steps += 1
            } else {
                steps += 1
                continue
            }
        }*/

    };

    render() {
        let { positive_number }  = this.state;

        return (
            <IonPage>
                <IonHeader>
                  <IonToolbar>
                    <IonButtons slot="start">
                      <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Collatz Conjecture</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent color="light">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="0.25"></IonCol>
                            <IonCol size="11.5">
                                <IonCard>
                                    <IonCardContent>
                                        This app calculates the <a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Collatz Conjecture </a>.
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="0.25"></IonCol>
                        </IonRow>
                        <IonRow >
                            <IonCol size="0.25"></IonCol>
                            <IonCol size="11.5">
                                <IonCard>                                
                                    <IonCardContent>                            
                                        <IonLabel>Type a number:</IonLabel>
                                        <IonInput placeholder="type here" min="0" type="number"  value={positive_number} onIonChange={(e: any) => this.setState({ positive_number: e.detail.value})} required inputmode="numeric"></IonInput>                                        
                                        <IonButton expand="block" color="primary" onClick={() => this.calculateConjecture()}><b>Calculate</b></IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="0.25"></IonCol>
                        </IonRow>
                        <IonRow>
                        {}
                        </IonRow>
                    </IonGrid>                     
                </IonContent>
            </IonPage>    
        );
    }
};

export default Collatz;