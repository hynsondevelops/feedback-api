let axios = require('axios');

let axiosClient = axios.create({
  baseURL: 'https://feedback-friend.herokuapp.com/',
});

export default axiosClient;