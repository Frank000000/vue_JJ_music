import axios from 'axios'

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
    console.log('响应拦截器');
    
return response.data;
},function(error){
    return Promise.reject(error);
});

export default axios
