import React,{Component} from 'react';
import {View, Text, Button, TextInput, ImageBackground} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import styles from '../../../styles/globalStyles';
import DefaultInput from '../../UI/DefaultInput/DefaultInput';
import HeadingText from '../../UI/HeadingText/HeadingText';
import backgroundImage from '../../../assets/background.jpg';
import ButtonWithBackground from '../../UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return(
            
            <ImageBackground source={backgroundImage} style={styles.backGroundImage}>
            <View style={styles.authContainer}>
                <HeadingText>Login</HeadingText>
                <ButtonWithBackground color="transparent">Cambiar a login</ButtonWithBackground>
                <TextInput style={styles.inputAuth} placeholder="Email" placeholderTextColor="white"/>
                <TextInput style={styles.inputAuth} placeholder="Password" placeholderTextColor="white"/>
                <TextInput style={styles.inputAuth} placeholder="Confirm Password" placeholderTextColor="white"/>
                <ButtonWithBackground color="transparent" onPress={this.loginHandler}>Entrar</ButtonWithBackground>
                </View>
            </ImageBackground>
            
        );
    }
}

export default AuthScreen;