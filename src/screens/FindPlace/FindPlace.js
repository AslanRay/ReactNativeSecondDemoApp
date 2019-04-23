import React,{Component} from 'react';
import {View, Text, Button, TouchableOpacity, Animated} from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import PlaceList from '../../components/PlaceList/PlaceList';
import styles from '../../../styles/globalStyles';

class FindPlace extends Component {

    state = {
        arePlacesLoaded: false,
        removeAnimation: new Animated.Value(1),
        addAnimation: new Animated.Value(0)

    }

    placesLoadedHandler = () => {
        Animated.timing(this.state.addAnimation, {
            toValue:1,
            duration:500,
            useNativeDriver:true
        }).start();
    }  

    placesSearchHandler = () => {
        // this.setState({
        //     arePlacesLoaded:true
        // })
        Animated.timing(this.state.removeAnimation,{
            toValue:0,
            duration:500,
            useNativeDriver:true
        }).start( () => {
            this.setState({
                arePlacesLoaded:true
            });
            this.placesLoadedHandler();
        });
    }

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

        let content = (
            <Animated.View style={{
                opacity:this.state.removeAnimation,
                transform: [
                    {
                        scale:this.state.removeAnimation.interpolate({
                            inputRange:[0,1],
                            outputRange:[1,1]
                        })
                    }
                ]
            }}>
                <TouchableOpacity onPress={this.placesSearchHandler}>
                    <View style={styles.findPlacesBtn}>
                        <Text style={styles.findPlacesBtnTxt}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );

        if(this.state.arePlacesLoaded) {
            content = (      
                <Animated.View style={{
                    opacity:this.state.addAnimation
                }}>
                <PlaceList 
                    places={this.props.places} 
                    onItemSelected={this.itemSelectedHandler}
                />
                </Animated.View>          
            );
        }
        return(
            <View style={this.state.arePlacesLoaded ? null : styles.findPlacesBtnContainer} >
                {content}
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