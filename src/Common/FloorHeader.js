import React from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native'
import SelectButton from './Selectionbutton'
const FloorHeader = () => {
    return(
        <View style= {styles.container}>
            <View style= {styles.header}>
            <Text style= {styles.text}>Floor</Text>
            </View>
            <View style= {styles.button}>
            <SelectButton number="1" size = "large"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row",

    },  
    header:{
        flex:70,
    },
    button:{
        flex:30,
        paddingTop: 10
    },
    text: {
        fontSize:60,
        fontWeight:"bold"
    },

})

export default FloorHeader;

