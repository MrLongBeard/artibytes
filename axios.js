/* eslint-disable prettier/prettier */
import axios from 'axios';
// for production port should be 5000
// for testing port should be 5500
const instance = axios.create({
     baseURL: 'https://artibytes-cloud-api.herokuapp.com/api',
});

export default instance;
