import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bookorders-62f7b.firebaseio.com/'
});

export default instance;
