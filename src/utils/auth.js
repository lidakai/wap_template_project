import Cookies from 'js-cookie'
import store from '@/store'
const TokenKey = 'token';

export function getToken() {
  // return Cookies.get(TokenKey)
  return true
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


export function getOpenId() {
  return Cookies.get('openid')
}

export function getCookie(name)
{
  let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  return (arr=document.cookie.match(reg))?unescape(arr[2]):null;
}

export function clearAllCookie() {
  const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if(keys) {
    for(let i = keys.length; i--;)
      document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()+';domain=zhibobao.com'
  }
}



export function isExperience()
{
  if(store.getters.userInfo.uid===store.getters.experience.uid){
    return true
  }
  return false
}



