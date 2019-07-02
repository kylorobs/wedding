import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://wedding-1c5b7.firebaseio.com/'
})

export default instance;
