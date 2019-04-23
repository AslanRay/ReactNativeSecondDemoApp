import { StyleSheet} from 'react-native';
import { black } from 'ansi-colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#F5FCFF',
        alignItems: "center",
        justifyContent: "flex-start"
    },
    inputContainer: {
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textInputPlace: {
        width:"70%",
        justifyContent:"flex-start",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:'black'
    },
    buttonPlace:{
        width:"30%",
    },
    listItem: {
        width:"100%",
        padding:10,
        backgroundColor:"#eee",
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center"
    },
    listContainer: {
        width:"100%",
        paddingTop:10
        
    },
    placeImage: {
        marginRight:8,
        height:30,
        width:30
    },
    modalContainer: {
        margin:22
    },
    foundImagePlace: {
        height:200,
        width:"100%"
    },
    foundNamePlace: {
        fontWeight:"bold",
        textAlign:"center",
        fontSize:28
    },
    deleteButton: {
        alignItems:"center"
    }
  });
  