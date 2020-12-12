import React, { Component,useState, useRef, useEffect, useReducer } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, YellowBox, TouchableOpacity } from 'react-native';
import { colors } from '../../../Assets/Color/color';
import { Button, Container, Header, Content, Form, Item, Input ,Label} from 'native-base';

// const [loginForm, updateLoginForm] = useState({
//     email: {
//         elementType: 'input',
//         elementConfig: {
//             name: 'email',
//             placeholder: 'Email',
//             keyboardType: 'email-address',
//             autoCapitalize: 'none',
//         },
//         value: '',
//         validation: {
//             required: true,
//             lowerCase: true,
//             email: true,
//         },
//         valid: false,
//     },
//     password: {
//         elementType: 'input',
//         elementConfig: {
//             name: 'password',
//             placeholder: 'Password',
//         },
//         value: '',
//         validation: {
//             required: true,
//         },
//         valid: false,
//     },
// });


// const [formIsValid,setFormIsValid] = useState(false);
// const [loading, setLoading] = useState(false);
// const [responseError, SetResponseError]  = useState('');

// const emailRE = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

// const handleLogin = async () => {
//     if (formIsValid) {
//         const data = {};
//         for (let formElementID in loginForm) {
//             data[formElementID] = loginForm[formElementID].value;
//         }
//         await signIn(data,setLoading,SformetResponseError)
//     }
//     else {
//         SetResponseError("Invalid username or password")
//     }
// }

// const checkValidity = (value,validation) => {
//     let isValid = true;
//     if (validation.required) {
//         isValid  = value.trim() !== '' && isValid;
//     }
//     if(validation.lowerCase) {
//         value = value.lowerCase();
//         isValid = isNaN(value) && isValid;
//     }
//     if (validation.email) {
//         isValid = emailRE.test(value) && isValid
//     }
// }


export default class FormExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Text style = {styles.mainHeading}>Artibytes</Text>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />       
            </Item>
          </Form>
        </Content>
            
            <Button full primary><Text style={styles.signInButton}> Sign In </Text></Button>
            <Button full bordered><Text>Sign Up</Text></Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    mainHeading: {
        marginLeft:10,
        fontSize:30,
        fontFamily: 'Times New Roman'
    },
    signInButton: {
        color: colors.white,
        
    }
});















