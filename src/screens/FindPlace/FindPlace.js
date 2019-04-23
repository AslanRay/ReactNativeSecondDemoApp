import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlace extends Component {


    itemSelectedHandler = key => {
        const selectedPlace = this.props.places.find( place => {
            return place.key === key;
        });
        Navigation.push("findplacestack",{
            component: {
                name:"awsm-places.PlaceDetailsScreen",
                passProps: {
                    selectedPlace: selectedPlace,
                    img: selectedPlace.image,
                    txt: selectedPlace.name
                },
                options: {
                    topBar: {
                        title: { text: selectedPlace.name }
                    }
                }
            }
        });
    }

    render() {
        return(
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        //El primer places es el root reducers
        //el segundo places es el estado dentro del initialState del reducer places.js
        places: state.places.places
    };
};

export default connect(mapStateToProps)(FindPlace);