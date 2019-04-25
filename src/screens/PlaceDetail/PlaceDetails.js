import React, { Component } from 'react';
import {View,Text,Image,Button, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';
import { Navigation } from 'react-native-navigation';
import MapView, {Marker} from 'react-native-maps';


class PlaceDetail extends Component {

    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        Navigation.pop(this.props.componentId);

    }

    render() 
    {
        return(    
            <ScrollView>
            <View style={styles.modalContainer}>
                <View>
                    <View style={styles.modalSeparator}>
                        <Image source={this.props.selectedPlace.image} style={styles.foundImagePlace} />
                    </View>
                    <View style={styles.modalSeparator}>
                    <MapView style={styles.googleMap} initialRegion={{...this.props.selectedPlace.region}}>
                        <MapView.Marker coordinate={this.props.selectedPlace.region}/>
                    </MapView>
                    </View>
                    <View style={styles.modalSeparator}>
                    <Text style={styles.foundNamePlace}>{this.props.txt}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <View style={styles.deleteButton}>
                            <Icon size={30} name="ios-trash" color="red" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null,mapDispatchToProps)(PlaceDetail);