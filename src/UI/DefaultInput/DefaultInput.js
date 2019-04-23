import React from 'react';
import {TextInput} from 'react-native';
import styles from '../../../styles/globalStyles';

const defaultInput = props => (
    <TextInput 
        placeHolderTextColor='#FFF'
        style={styles.inputAuth}
        {...props}
    />
);

export default defaultInput;