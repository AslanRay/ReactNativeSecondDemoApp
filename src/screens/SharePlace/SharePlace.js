import React,{Component} from 'react';
import {View, Text, Button, TextInput, ScrollView, Image, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import styles from '../../../styles/globalStyles';
import HeadingText from '../../UI/HeadingText/HeadingText';
import imagePlaceHolder from '../../../assets/beautiful-place.jpg';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MapView, {Marker} from 'react-native-maps';
import ImagePicker from 'react-native-image-picker';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
let LATITUDE = 32.522458;
let LONGITUDE = -117.019024;
const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class SharePlace extends Component {

    state = {
        placeName: "",
        region: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        locationChosen: true,
        pickedImage: null
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
        this.props.onAddPlace(this.state.placeName,this.state.region,this.state.pickedImage);
        this.setState({
            placeName: ''
          });
    }

    pickLocationHandler = event => {
      const coords = event.nativeEvent.coordinate;
      this.map.animateToRegion({
        ...this.state.region,
        latitude:coords.latitude,
        longitude:coords.longitude
      });
      this.setState( prevState => {
        return {
          region: {
            ...prevState.region,
            latitude:coords.latitude,
            longitude:coords.longitude
          }
        }
      })
    }

    getLocationHandler = () => {
      navigator.geolocation.getCurrentPosition( pos => {
        const coordEvent = {
          nativeEvent: {
            coordinate: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          }
        };
        this.pickLocationHandler(coordEvent);
      }, error => {
        console.log(error);
        alert("No se encontro la posicion, ingresa manualmente");
      });
    }

    pickImageHandler = () => {
      ImagePicker.showImagePicker({title:"Elige una imagen"},res => {
        if(res.didCancel) {
          console.log("Usuario cancelo");
        } else if(res.error) {
          console.log("Error ",res.error);
        } else {
          this.setState({
            pickedImage:{uri:res.uri}
          });
        }
      });
    }

    render() {

      let marker = null;
      if(this.state.locationChosen) {
        marker = <MapView.Marker coordinate={this.state.region} />
      }
        return(
            <ScrollView>
            <View>
                <View style={{alignItems:"center"}}><Text style={styles.headingSharePlace}>Share a place with us!</Text></View>
                <View style={styles.placeHolder}><Image source={this.state.pickedImage} style={styles.previewImage}/></View>
                <View style={styles.buttonMargin}><Button title="Pick image" onPress={this.pickImageHandler}/></View>
                <View style={styles.placeHolder}>
                  <MapView 
                    provider={this.props.provider}
                    initialRegion={this.state.region}
                    
                    style={styles.googleMap}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                  >
                    {marker}
                  </MapView>
                </View>
                <View style={styles.buttonMargin}><Button title="Locate me" onPress={this.getLocationHandler}/></View>
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
        onAddPlace: (placeName,region, pickedImage) => dispatch(addPlace(placeName,region, pickedImage))
    };
};

export default connect(null,mapDispatchToProps)(SharePlace);