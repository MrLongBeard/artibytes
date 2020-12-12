import React from 'react'
import {Image,View,StyleSheet,Text} from 'react-native'
import { Button as Btn } from 'react-native-paper';
import logo from '../../Assets/icons/logo.jpeg'
import illustration from '../../Assets/icons/illustration.png'
const welcome = () => {
    return(     
        <View style = {styles.container}>
            <Image style = {styles.logo}source={logo} resizeMode="contain"></Image>
            <Text style = {styles.mainText}>Welcome!</Text>
            <Text style = {styles.tagText}> Control your world with our ecosystem!</Text>
            <Text style = {styles.tag2Text}>Configure your Artibytes Home!</Text>
            <Btn style = {styles.startBtn} mode="contained" onPress={() => console.log('Pressed')}>
            Start Now
          </Btn>
          <Image style = {styles.illustration}source={illustration}></Image>
        </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        flexDirection:"column"
    },
    logo: {
        flex:10,
        width:100,
    },
    mainText: {
        flex:6,
        fontSize:40,
        fontWeight:"bold",
        color:"#171717"
    },
    tagText: {
        flex:3,
        fontSize:14,
        color:"#171717"
    },
    tag2Text: {
        flex:3,
        fontSize:14,
        fontWeight:"bold",
        color:"#3474ba"
    },
    illustration: {
        flex:30,
        width:400,

    },
    startBtn: {
    flex:4,
    backgroundColor:"#3474ba"
    }
});

export default welcome;