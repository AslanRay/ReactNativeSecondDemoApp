import {Navigation} from 'react-native-navigation';



export const authNavigation = () => Navigation.setRoot({
    root: {
      stack: {
        id:'authRoot',
        children: [{
          component: {
            id:'authRoot',
            name: 'awsm-places.AuthScreen',
            options: {
              topBar: {
                visible:false,
                drawBehind:true
              }
            }
          }
        }]
      }
    }
  });
