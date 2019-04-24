import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../../../styles/globalStyles';

const buttonWithBackground = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.buttonWithBG,{backgroundColor:props.color}]}>
            <Text style={styles.txtBtn}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);


export default buttonWithBackground;