let axios = require('axios');

let axiosClient = axios.create({
  baseURL: 'https://boiling-temple-96661.herokuapp.com/',
});

export default axiosClient;