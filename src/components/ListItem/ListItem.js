import React from 'react';
import {View,Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../../styles/globalStyles';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image source={props.placeImage} style={styles.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

export default ListItem;