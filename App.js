import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetails from './src/screens/PlaceDetail/PlaceDetails';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';
const store = configureStore();

//Registrando Screens
//registerComponent toma dos argunentos, el primero es string que
//sirve de identificador y el segundo es una funcion que devuelve una pantalla
Navigation.registerComponent('awsm-places.AuthScreen', () => (props) => (
  <Provider store={store}>
    <AuthScreen />
  </Provider>
), () => AuthScreen);

Navigation.registerComponent('awsm-places.SharePlaceScreen', () => (props) => (
  <Provider store={store}>
    <SharePlaceScreen />
  </Provider>
), () => SharePlaceScreen);

Navigation.registerComponent('awsm-places.FindPlaceScreen', () => (props) => (
  <Provider store={store}>
    <FindPlaceScreen componentId="findPlaceId" />
  </Provider>
), () => FindPlaceScreen);

Navigation.registerComponent('awsm-places.PlaceDetailsScreen', () => (props) => (
  <Provider store={store}>
    <PlaceDetails {...props}/>
  </Provider>
), () => PlaceDetails);

Navigation.registerComponent('awsm-places.SideDrawerScreen', () => (props) => (
  <Provider store={store}>
    <SideDrawerScreen  />
  </Provider>
), () => SideDrawerScreen);

//Inicialzamos la app en la navegacion
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'awsm-places.AuthScreen',
        options: {
          topBar: {
            title: {
              visible:true,
              text: "Login",
              fontSize:14
            }
          }
        }
      }
    }
  });
});