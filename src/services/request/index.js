import axios from 'axios'
import {TIMEOUT,BASE_URL} from './config'

class Request{
  constructor(baseURL,timeout){
    this.instance=axios.create({
      baseURL,
      timeout,
    })
    
    // this.instance.interceptors.request.use(function (config) {
    //   // Do something before request is sent
    //   return config;
    // }, function (error) {
    //   // Do something with request error
    //   return Promise.reject(error);
    // });

    this.instance.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });
  }
  request(config){
   return this.instance.request({...config})
  }

  get(config){
    return this.instance({...config,method:'get'})
  }
  post(config){
    return this.instance.post({...config,method:'post'})
  }

}

export default new Request(BASE_URL,TIMEOUT)