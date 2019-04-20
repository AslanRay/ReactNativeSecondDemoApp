import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import styles from './styles/globalStyles';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './assets/beautiful-place.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetails';

export default class App extends Component {

  state = {
    places:[],
    selectedPlace:null
  };
  
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key:Math.random().toString(),
          name:placeName,
          image: {
            uri: "https://farm6.staticflickr.com/5681/22867991412_e1aab97729_b.jpg"
          }
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return{
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter( place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace:null
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace:null
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
            selectedPlace ={this.state.selectedPlace}
            onItemDeleted = {this.placeDeletedHandler}
            onModalClosed = {this.modalClosedHandler}
          /> 
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}
