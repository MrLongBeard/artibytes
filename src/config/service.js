import {Apis,Header} from './apis'
import AxiosCustom from '../../axios'
import axios from 'axios'


export const Service = {
    
    login: async() => {
        await AxiosCustom.post(Apis.login, state, {headers: Header}).then(res => {
            console.log('I get the login response' + res)
        }).catch(err => {
            console.log('Error' + err)
        })
    },

    signup: async() => {
        await AxiosCustom.post(Apis.signup, state, {headers: Header}).then(res => {
            console.log('I get the signup response' + res)
        }).catch(err => {
            console.log('Error' + err)
        })
    },
}
