import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
        IonCard, IonCardContent, IonLabel, IonInput, IonItem, 
        IonButton, IonChip, IonGrid, IonRow,
        IonCol, IonButtons, IonMenuButton  } from '@ionic/react';
import React from 'react';
import './Bmi.css';

class Bmi extends React.Component<{}, any> {

    constructor(props: any){
        super(props);
        this.state = {
            height: "",
            weight: "",
            bmi: "",
            chipColor: "",
            chipText: "x"
        }
    }

    calculateBMI() {    
        let { weight, height } = this.state;

        let txt, color = "";
        let bmiRes = "";

        bmiRes = ((weight / height) / height).toFixed(2);

        if ( parseFloat(bmiRes) < 18.5 ) {

            color = "warning";
            txt = "Skinny";

        } else if (parseFloat(bmiRes) >= 18.5 && parseFloat(bmiRes) < 24.9 ) {

            color = "success";
            txt = "Okay";

        } else if (parseFloat(bmiRes) > 25 && parseFloat(bmiRes) < 29.9 ) {

            color = "warning";
            txt = "Chubby";

        } else {

            color = "danger";
            txt = "Obese";

        }
        
        this.setState({
            bmi: bmiRes,
            chipColor: color,
            chipText: txt
        })
        
    };

    render() {
        let { height, weight, bmi, chipColor, chipText } = this.state;

        return (
            <IonPage>
                <IonHeader>
                  <IonToolbar>
                    <IonButtons slot="start">
                      <IonMenuButton />
                    </IonButtons>
                    <IonTitle>BMI Calculator</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent color="light">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="0.25"></IonCol>
                            <IonCol size="11.5">
                                <IonCard>
                                    <IonCardContent>
                                        This app calculates your Body Mass Index <a href="https://en.wikipedia.org/wiki/Body_mass_index">(BMI)</a>.
                                        Enter your height and weight to check whether your health is okay or not.
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
                                        <IonItem lines="none">
                                            <IonLabel>Height (m):</IonLabel>
                                            <IonInput placeholder="type here" min="0" type="number" value={height}  onIonChange={(e: any) => this.setState({ height: e.detail.value})} required inputmode="numeric"></IonInput>
                                        </IonItem>
                                        <IonItem lines="none">
                                            <IonLabel>Weight (kg):</IonLabel>
                                            <IonInput placeholder="type here" min="0" type="number" value={weight} onIonChange={(e: any) => this.setState({ weight: e.detail.value})} required inputmode="numeric"></IonInput>
                                        </IonItem>         
                                        <IonButton expand="block" color="primary" onClick={() => this.calculateBMI()}><b>Calculate</b></IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                            <IonCol size="0.25"></IonCol>
                        </IonRow>
                        <IonRow>
                          <IonCol size="0.25"></IonCol>
                          <IonCol size="11.5">
                            <IonCard>
                                <IonCardContent>
                                    <IonItem lines="none">
                                        <IonLabel>BMI: <b>{bmi}</b></IonLabel>
                                        <IonChip color={chipColor}>
                                            <IonLabel><b>{chipText}</b></IonLabel>
                                        </IonChip>                                                       
                                    </IonItem>                    
                                </IonCardContent>
                            </IonCard>  
                          </IonCol>
                          <IonCol size="0.25"></IonCol>
                        </IonRow>
                    </IonGrid>    
                </IonContent>
            </IonPage>    
        );
    }
};

export default Bmi;