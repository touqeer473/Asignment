import axios from 'axios';

const API_HOST = 'famous-quotes1.p.rapidapi.com';
const API_KEY = 'YOUR_RAPIDAPI_KEY';

const config = {
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST,
    'Content-Type': 'application/json'
  }
};

export const fetchQuote = () => axios.get('https://famous-quotes1.p.rapidapi.com/random', config);

export const postData = (data) => axios.post('https://jsonplaceholder.typicode.com/posts', data);

export const putData = (id, data) => axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
