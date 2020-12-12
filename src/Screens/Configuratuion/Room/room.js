import React from 'react'
import {
TouchableHighlight
,View,Text,Button,TouchableOpacity, StyleSheet} from 'react-native'
import FloorHeader from '../../../Common/FloorHeader'
import SelectionButton from '../../../Common/Selectionbutton'
import { Button as Btn } from 'react-native-paper';

const Room = () => {
    return(
        <View>
        <View style = {styles.container}>
        <FloorHeader/>
        </View>
        <Text style = {styles.tagText}> Select number of rooms </Text>
          <View style = {styles.buttonContainer} >
          <SelectionButton number="1" size="small"/>        
          <SelectionButton number="2" size="small"/>        
          <SelectionButton number="3" size="small"/>        
          <SelectionButton number="4" size="small"/>
          
          <SelectionButton number="5" size="small"/>        
          <SelectionButton number="6" size="small"/>        
          <SelectionButton number="7" size="small"/>        
          <SelectionButton number="8" size="small"/>          
          </View>
          <View style = {styles.btnContainer}>

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
  container:{
      margin:50,
      alignContent:"center",
  },
  btnContainer:{
    justifyContent:"center",
    alignItems:"center"
  },
tagText:{
    marginTop:30,
    textAlign:"center",
    fontSize:20,
    color:"#3474ba",
    fontWeight:"bold"
  },
  buttonContainer:{
    flex:1,
    padding:70,
    flexDirection:"row",
    justifyContent:"space-evenly"
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

export default Room;