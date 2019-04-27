import {TRY_AUTH , AUTH_SET_TOKEN} from './actionTypes';
import { uiStartLoading, uiStopLoading } from './index';
import startMainTabs from '../../screens/MainTabs/startMainTabs';
//import AsyncStorage from '@react-native-community/async-storage';
import {AsyncStorage} from 'react';

export const tryAuth = (authData, authMode) => {
    return dispatch => {
        dispatch(uiStartLoading());
        const apiKey = "AIzaSyAxbSwMgo6M7Tr-1tFRbqy8oQwLWJ0AChI";
        let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key="+apiKey
        if(authMode === "signup") {
            url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key="+apiKey;
        }
        fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                email: authData.email,
                password: authData.password,
                returnSecureToken:true
            }),
            headers: {
                "Content-Type":"application/json"
            }
        }) .catch( err => {
            console.log(err);
            alert("Fallo en autenticacion, intentar nuevamente");
            dispatch(uiStopLoading());
        })
        .then( res => res.json())
        .then(parsedRes => {
            dispatch(uiStopLoading());
            if(!parsedRes.idToken) {
                alert("Fallo en autenticacion, intentar nuevamente");
            } else {
                dispatch(authSetToken(parsedRes.idToken));
                dispatch(authStoreToken(parsedRes.idToken))
                startMainTabs();
            }
        })
        
    }
};

export const authSetToken = token => {
    return {
        type: AUTH_SET_TOKEN,
        token: token
    };
};

export const authStoreToken = token => {
    return dispatch => {
        dispatch(authSetToken(token));
        try {
            AsyncStorage.setItem("demoApp_authToken",token);
            console.log("token guardado en async storage")
        } 
        catch(e) {
            console.log(e)
        }
        
    };
};

// -- Segunda version de get token -- //

// export const authGetToken = () => {
//     // return (dispatch, getState) => {
//     //     const token = getState().auth.token;
//     //     console.log(token);
//     //     const promise = new Promise((resolve, reject) => {
            
//     //         token
//     //                 .catch(err => reject())
//     //                 .then(resolve(token))
//     //         }
//     //     );  
//     //     return promise;
//     // };
//     try {
//         const token = AsyncStorage.getItem("demoApp_authToken")
//         if(token !== null) {
//             console.log('Token recuperado: '+token)
//             return token;
//         }
//     } catch (e) {
//         console.log('error '+e)
//     }
// };


// -- SEGUNDA VERSION DE GET TOKEN --//
// export const authGetToken = () => {
//     return (dispatch, getState) => {
//         const promise = new Promise((resolve, reject) => {
//             const token = getState().auth.token;
//             if (!token) {
//                 reject();
//             } else {
//                 resolve(token);
//             }
//         });  
//         return promise;
//     };
// };

// -- TERCER VERSION DE GET TOKEN --//
export const authGetToken = () => {
    return (dispatch, getState) => {
        const promise = new Promise((resolve, reject) => {
            const token = getState().auth.token;
            if (!token) {
                let fetchedToken;
                AsyncStorage.getItem("demoApp_authToken")
                    .catch(err => reject())
                    .then(tokenFromStorage => {
                        fetchedToken = tokenFromStorage;
                        if (!tokenFromStorage) {
                            reject();
                            return;
                        }
                    })
                    .catch(err => reject());
            } else {
                resolve(token);
            }
        });  
        return promise;
    };
};


export const authAutoSignIn = () => {
    return dispatch => {
        dispatch(authGetToken())
            .then(token => {
                startMainTabs();
            })
            .catch(err => console.log("Fallo en recuperar el token"))
    };
};