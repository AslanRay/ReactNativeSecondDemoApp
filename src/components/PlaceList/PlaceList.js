import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import styles from '../../../styles/globalStyles';

import ListItem from "../ListItem/ListItem";

const placeList = props => {
  


  return <FlatList 
  style={styles.listContainer} 
  data={props.places}
  renderItem={(info)=>(    
    <ListItem
      placeName={info.item.name}
      placeImage={info.item.image}
      onItemPressed={() => props.onItemSelected(info.item.key)}
    />)}></FlatList>;
};

export default placeList;
