import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import {Message} from "element-ui"
// 创建axios的实例
const service = axios.create({
    timeout:10000
})
// 请求拦截
service.interceptors.request.use((config:AxiosRequestConfig)=>{
    if(localStorage.getItem("myToken")){
        config.headers.Authorization=localStorage.getItem("myToken");
    }
    console.log("request");
    return config;
},(err:any)=>{
    Promise.reject(err);
})
// 响应拦截
service.interceptors.response.use((response:AxiosResponse)=>{
    return response;
},(err:any)=>{
    let errMsg:string="";
    if(err&err.response.status){
        switch(err.response.status){
            case 401:
            errMsg="登陆状态失败，请重新登录"
            break;
            case 500:
            errMsg="服务器内部出错"
             break;
        }
    }
    Message.error(errMsg);
    return Promise.reject(errMsg)
})
export default service;