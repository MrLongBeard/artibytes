import React from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native'

 const SelectionButton = ({size,number}) => {
    return (
         size == "large"  ?  
         <TouchableOpacity style = {styles.selectButtonLarge}>
            <Text style = {styles.textLarge}>
               {number}
            </Text>
         </TouchableOpacity>
        :
        <TouchableOpacity style = {styles.selectButtonSmall}>
        <Text style = {styles.textSmall}>
           {number}
        </Text>
        </TouchableOpacity>
        
       );
}

const styles = StyleSheet.create({
    textLarge:{
        fontSize:25,
        fontWeight:"bold",
        color: "black",
    },
    selectButtonLarge:{
        width:55,
        height:55,
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
    textSmall:{
        fontSize:20,
        fontWeight:"bold",
        color: "black",
    },
    selectButtonSmall:{
        width:45,
        height:45,
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


})
 export default SelectionButton;