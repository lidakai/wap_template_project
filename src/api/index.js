import axios from 'axios'
import { getToken,getCookie } from '@/utils/auth'
import { Message,MessageBox } from 'element-ui'
 const apiInstance = function () {
    //全局的 axios 默认值
   const axios_service = axios.create({
      baseURL: 'http://47.98.38.71:3006' ,// api的base_url http://v4.api.zhibobao.com
      timeout: 20000, // 请求超时时间
      headers:{
        "X-Token":'Bearer ' + getToken(),
        post:{
          'Content-Type':'application/x-protobuf'
        }
      }
    });
    let api = ({
      invoker :function (server, request) {
        let url =  server;
        axios_service.defaults.headers['X-Token'] = 'Bearer ' + getToken();
        return axios_service.post(url,request).then( function(resp) {
          let code = parseInt(resp.headers['x-err-code']) || 0;
          let message = resp.headers['x-err-message'] || '';
          if(resp.status === 500){
            Message("服务器无法连接，请刷新重试");
            return false
          }

          if(resp.status === 200 && (code !== 0 || message)){
            try{
                let {code, message} = resp.data;
                Message.error(message||"系统错误，请刷新重试");
              }catch (err){
                console.error(err);
              }
              return false;
          }else if(resp.data.code === 400||resp.data.code === 500||resp.data.code === 501){
            Message.error(resp.data.message);
            return false
          }
          return {
            data:resp.data,
            code:code,
            message:message
          };
        }).catch((error)=>{
          console.error(error);
          return false
        })
      }
    });
    return api;
};
const api = apiInstance();
export default api;
