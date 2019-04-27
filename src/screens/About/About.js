import React, { Component } from 'react';
import {View,Text, Button, ImageBackground} from 'react-native';
import styles from '../../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navigation } from 'react-native-navigation';
import backgroundImage from '../../../assets/awsmBokeh.jpg';
import ButtonWithBackground from '../../UI/ButtonWithBackground/ButtonWithBackground';
import authNavigation from '../../../src/screens/AuthScreen/AuthScreen';
import RNRestart from 'react-native-restart';

class About extends Component {

    render() 
    {
        return(
            <ImageBackground source={backgroundImage} style={styles.backGroundImage}>
                <View style={styles.authContainer}>
                    <Text style={{color:"white", fontSize:30, textAlign:"center", padding:10}}>Aplicacion demo para reforzar conocimientos de React Native</Text>
                    <ButtonWithBackground color="transparent" onPress={() =>RNRestart.Restart()}>Cerrar sesion</ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
};



export default About;