import axios from 'axios';

const productsDB = axios.create({
    baseURL: "http://127.0.0.1:3000",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})

export default productsDB;