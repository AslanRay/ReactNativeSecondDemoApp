import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import styles from '../../../styles/globalStyles';

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
      placeName: ''
    });
  };

  render() {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Un lugar asombroso!"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangedHandler}
            style={styles.textInputPlace}
            />
            <Button 
            title="Agregar"
            style={styles.buttonPlace}
            onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

export default PlaceInput;
