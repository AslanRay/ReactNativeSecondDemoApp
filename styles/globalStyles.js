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
    },
    authContainer: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    inputAuth: {
        width:"80%",
        borderBottomColor:"white",
        borderBottomWidth:1,
        margin:8,
        padding:5,

    },
    textHeading: {
        fontSize:40,
        fontWeight:"bold",
        color:'white'
    },
    backGroundImage: {
        width:"100%",
        height:"100%"
    },
    buttonWithBG: {
        padding:10,
        margin:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:"white"
    },
    txtBtn: {
        color:"#FFF",
        fontSize:18,
        fontWeight:"bold"
    },
    placeHolder: {
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"#eee",
        width:"95%",
        height:300,
        margin:10,
        padding:10

    },
    inputSharePlace: {
        width:"80%",
        borderBottomColor:"black",
        borderBottomWidth:1,
        margin:8,
        padding:5,
    },
    buttonMargin: {
        margin:8
    },
    headingSharePlace: {
        fontSize:40,
        fontWeight:"bold",
        color:'black',
    },
    previewImage: {
        width:"100%",
        height:"100%"
    },
    findPlacesBtnContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    findPlacesBtn: {
        borderColor:'blue',
        borderWidth:3,
        borderRadius:50,
        padding:20,
    },
    findPlacesBtnTxt: {
        color:'blue',
        fontWeight:'bold',
        fontSize:26,
        textAlign:"center"
    }

  });
  