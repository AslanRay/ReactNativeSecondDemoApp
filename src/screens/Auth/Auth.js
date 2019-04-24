import React,{Component} from 'react';
import {View, Text, Button, TextInput, ImageBackground} from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import styles from '../../../styles/globalStyles';
import DefaultInput from '../../UI/DefaultInput/DefaultInput';
import HeadingText from '../../UI/HeadingText/HeadingText';
import backgroundImage from '../../../assets/background.jpg';
import ButtonWithBackground from '../../UI/ButtonWithBackground/ButtonWithBackground';
import validate from '../../../src/utility/validation';
import { connect } from 'react-redux';
import {tryAuth} from '../../store/actions/index';

class AuthScreen extends Component {

    loginHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value,
        };
        this.props.onLogin(authData);
        startMainTabs();
    }

    state = {
        authMode: "login",
        controls: {
            email: {
                value:'',
                isValid:false,
                validationRules: {
                    isEmail: true
                }
            },
            password: {
                value:'',
                isValid:false,
                validationRules: {
                    minLength:6
                },
            },
            confirmPassword: {
                value:'',
                isValid:false,
                validationRules: {
                    equalsTo: 'password'
                }
            }
            }
        }

    updateInputState = (key,value) => {
        let connectedValue = {};
        if(this.state.controls[key].validationRules.equalsTo) {
            const equalsControl = this.state.controls[key].validationRules.equalsTo;
            const equalsValue = this.state.controls[equalsControl].value;
            connectedValue = {
                ...connectedValue,
                equalsTo: equalsValue
            }
        }
        if(key === 'password') {
            connectedValue = {
                ...connectedValue,
                equalsTo: value
            }           
        }
        this.setState( prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid: key === 'password' ? validate(prevState.controls.confirmPassword.value, prevState.controls.confirmPassword.validationRules, connectedValue) : prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value:value,
                        valid:validate(value,prevState.controls[key].validationRules,connectedValue)
                    }
                }
            }
        });
    }

    switchAuthModeHandler = () => {
        this.setState(
            prevState => {
                return {
                    authMode: prevState.authMode === "login" ? "signup" : "login"
                };
            }
        );
    }

    render() {
        let confirmPasswordControl = null;
        if(this.state.authMode === "signup") {
            confirmPasswordControl = (
                <TextInput 
                style={styles.inputAuth} 
                placeholder="Confirm Password"  
                placeholderTextColor="white"
                value={this.state.controls.confirmPassword.value}
                onChangeText={(val) => this.updateInputState('confirmPassword',val)}
                secureTextEntry={true}
                />
            );
        }
        return(
            <ImageBackground source={backgroundImage} style={styles.backGroundImage}>
            <View style={styles.authContainer}>
                <HeadingText>Login</HeadingText>
                <ButtonWithBackground 
                    color="transparent"
                    onPress={this.switchAuthModeHandler}>Cambiar A {this.state.authMode === 'login' ? 'Registro' : 'Login'}</ButtonWithBackground>
                <TextInput 
                    style={styles.inputAuth} 
                    placeholder="Email" 
                    placeholderTextColor="white"
                    value={this.state.controls.email.value}
                    onChangeText={ (val) => this.updateInputState('email',val)}
                    valid = {this.state.controls.email.valid}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    />
                <TextInput 
                    style={styles.inputAuth} 
                    placeholder="Password" 
                    placeholderTextColor="white"
                    value={this.state.controls.password.value}
                    onChangeText={ (val) => this.updateInputState('password',val)}
                    secureTextEntry
                    />
                    {confirmPasswordControl}
                <ButtonWithBackground 
                    color="transparent" 
                    onPress={this.loginHandler}
                    >Entrar</ButtonWithBackground>
                </View>
            </ImageBackground>
            
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (authData) => dispatch(tryAuth(authData))
    };
};

export default connect(null,mapDispatchToProps)(AuthScreen);