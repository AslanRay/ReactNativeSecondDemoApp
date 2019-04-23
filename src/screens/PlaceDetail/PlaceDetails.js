import React, { Component } from 'react';
import {View,Text,Image,Button, TouchableOpacity} from 'react-native';
import styles from '../../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';
import { Navigation } from 'react-native-navigation';


class PlaceDetail extends Component {

    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        Navigation.pop(this.props.componentId);

    }

    render() 
    {
        return(    
            <View style={styles.modalContainer}>
                <View>
                    <Image source={this.props.img} style={styles.foundImagePlace} />
                    <Text style={styles.foundNamePlace}>{this.props.txt}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                    <View style={styles.deleteButton}>
                        <Icon size={30} name="ios-trash" color="red" />
                    </View>
                </TouchableOpacity>
        </View>
            </View>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null,mapDispatchToProps)(PlaceDetail);