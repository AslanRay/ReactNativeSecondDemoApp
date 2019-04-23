import React,{Component} from 'react';
import {View, Text, Button, TextInput, ScrollView, Image} from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import styles from '../../../styles/globalStyles';
import HeadingText from '../../UI/HeadingText/HeadingText';
import imagePlaceHolder from '../../../assets/beautiful-place.jpg';
import PlaceInput from '../../components/PlaceInput/PlaceInput';

class SharePlace extends Component {

    state = {
        placeName: ""
      };
    
      placeNameChangedHandler = val => {
        this.setState({
          placeName: val
        });
      };

    placeAddedHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
          }
        this.props.onAddPlace(this.state.placeName);
        this.setState({
            placeName: ''
          });
    }

    render() {
        return(
            <ScrollView>
            <View>
                <View style={{alignItems:"center"}}><Text style={styles.headingSharePlace}>Share a place with us!</Text></View>
                <View style={styles.placeHolder}><Image source={imagePlaceHolder} style={styles.previewImage}/></View>
                <View style={styles.buttonMargin}><Button title="Pick image"/></View>
                <View style={styles.placeHolder}><Text>Map</Text></View>
                <View style={styles.buttonMargin}><Button title="Locate me"/></View>
                <TextInput 
                    style={styles.inputSharePlace} 
                    placeholder="Place name"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    />
                <View style={styles.buttonMargin}><Button title="Share the place!" onPress={this.placeAddedHandler}/></View>
            </View>
            </ScrollView>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName))
    };
};

export default connect(null,mapDispatchToProps)(SharePlace);