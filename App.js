import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import styles from './styles/globalStyles';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './assets/beautiful-place.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetails';
import {connect} from 'react-redux';
import {addPlace,deletePlace,selectPlace,deselectPlace} from './src/store/actions/index';

class App extends Component {

  
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
    
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
            selectedPlace ={this.props.selectedPlace}
            onItemDeleted = {this.placeDeletedHandler}
            onModalClosed = {this.modalClosedHandler}
          /> 
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    //El primer places es de slide del reductor combinado en el configureStore
    //El segundo places y selectedPlace corresponde a la propiedad dentro del reducer en el initialState
    places:state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App)