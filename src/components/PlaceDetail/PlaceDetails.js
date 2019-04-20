import React from 'react';
import {Modal,View,Text,Image,Button} from 'react-native';
import styles from '../../../styles/globalStyles';

const placeDetail = props => {

    let modalContent = null;
    if(props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.modalImage}/>
                <Text style={styles.modalText}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return(    
    <Modal 
        visible={props.selectedPlace !== null}
        animationType="slide">
        <View style={styles.modalContainer}>
            {modalContent}
            <View>
                <Button title="Borrar" color="red" onPress={props.onItemDeleted}/>
                <Button title="Cerrar" onPress={props.onModalClosed}/>
            </View>
        </View>
    </Modal>)

};

export default placeDetail;