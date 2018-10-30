import axios from 'axios';
import {Message} from 'element-ui';
import getCookie from 'js-cookie';

axios.defaults.timeout = 5000;
// axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'http://192.168.0.201:8080' : 'http://192.168.0.201:8080';

// axios.create({
//   baseURL: process.env.baseUrl
// })

//http request 拦截器
axios.interceptors.request.use(
  config => {
    const token = getCookie('BokeToken');
    // config.data = JSON.stringify(config.data);
    config.headers = {
      'content-type':'application/x-www-form-urlencoded'  //content-type: application/x-www-form-urlencoded
    };
    return config;
  }, err => {
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  response => {
    // if (response.data.code !== 1) {
    //   Message.error(response.data.msg);
    // }
    // console.log(response,'response');
    return response;
  }, err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '错误请求'
          break;
        case 401:
          err.message = '未授权，请重新登录';
          // setTimeout(()=>{
          //   this.$router.push({path: '/login'});
          //   getCookie.remove('BokeId');
          //   getCookie.remove('BokeToken');
          // }, 1500);
          break;
        case 403:
          err.message = '拒绝访问，请重新登录';
          // setTimeout(() => {
          //   this.$router.push({path: '/login'});
          //   // window.location.href = '/login';
          //   getCookie.remove('BokeId');
          //   getCookie.remove('BokeToken');
          // }, 1500);
          break;
        case 404:
          err.message = '请求错误,未找到该资源'
          break;
        case 405:
          err.message = '请求方法未允许'
          break;
        case 408:
          err.message = '请求超时'
          break;
        case 500:
          err.message = '服务器端出错'
          break;
        case 501:
          err.message = '网络未实现'
          break;
        case 502:
          err.message = '网络错误'
          break;
        case 503:
          err.message = '服务不可用'
          break;
        case 504:
          err.message = '网络超时'
          break;
        case 505:
          err.message = 'http版本不支持该请求'
          break;
        default:
          err.message = `连接错误${err.response.status}`
      }
    } else {
      err.message = "连接到服务器失败"
    }
    Message.error(err.message)
    return Promise.resolve(err.response)
  }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
