import React from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet,Image, TouchableWithoutFeedback} from 'react-native'
import home from '../Assets/icons/home.png'
import flat from '../Assets/icons/flat.png'
import { Button as Btn } from 'react-native-paper';

 const SelectionType = ({img}) => {
    return (
        <View>
         <Text style = {styles.tagText}> Select House Type</Text>
        <View style = {styles.container}>
        <TouchableOpacity style= {styles.selectButton,{flex:50}}>
            <Image style= {styles.tinyLogo} source={home} ></Image>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.selectButton,{flex:50}}>
            <Image style= {styles.tinyLogo} source={flat} ></Image>
        </TouchableOpacity>
        </View>
        <View style={{margin:120}}>
        <Btn style = {styles.secondaryBtn} color="#3474ba" mode="outlined" onPress={() => console.log('Pressed')}>
          Back
          </Btn>
          <Btn style = {styles.primaryBtn} mode="contained" onPress={() => console.log('Pressed')}>
            Next
          </Btn>
        </View>
        </View>
        
       );
}

const styles = StyleSheet.create({
   container: {
       flex:1,
       flexDirection:"row",
       marginTop:100,
       marginBottom:40,
       marginLeft:50
   },
   tinyLogo: {
    width: 100,
    height: 100,
  },
  selectButton:{
    width:125,
    height:125,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 20, // Android
    flexDirection:"row"
},
tagText:{
    marginTop:10,
    textAlign:"center",
    fontSize:20,
    color:"#3474ba",
    fontWeight:"bold"
  },
  primaryBtn: {
    backgroundColor:"#3474ba",
    color:"black",
    width:100,
  },
  secondaryBtn: {
    borderColor:"#3474ba",
    color:"#3474ba",
    width:100,
  }
})
 export default SelectionType;