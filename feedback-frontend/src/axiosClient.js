let axios = require('axios');

console.log(process.env.NODE_ENV)
let axiosClient = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? "http://localhost:3000/" : 'https://feedback-friend.herokuapp.com/',
});

export default axiosClient;