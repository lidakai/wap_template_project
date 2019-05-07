/**
 * Created by jiachenpan on 16/11/18.
 */

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function sort(arr) {
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1-i;j++){
      if(arr[j].value<=arr[j+1].value){
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

// 格式化时间
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 *get getByteLen
 * @param {Sting} val input value
 * @returns {number} output value
 */
export function getByteLen(val) {
  let len = 0
  for (let i = 0; i < val.length; i++) {
    if (val[i].match(/[^\x00-\xff]/ig) != null) {
      len += 1
    } else { len += 0.5 }
  }
  return Math.floor(len)
}

export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

export function param(json) {
  if (!json) return ''
  return cleanArray(Object.keys(json).map(key => {
    if (json[key] === undefined) return ''
    return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key])
  })).join('&')
}

export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

export function objectMerge(target, source) {
  /* Merges two  objects,
     giving the last one precedence */

  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  for (const property in source) {
    if (source.hasOwnProperty(property)) {
      const sourceProperty = source[property]
      if (typeof sourceProperty === 'object') {
        target[property] = objectMerge(target[property], sourceProperty)
        continue
      }
      target[property] = sourceProperty
    }
  }
  return target
}

export function scrollTo(element, to, duration) {
  if (duration <= 0) return
  const difference = to - element.scrollTop
  const perTick = difference / duration * 10
  setTimeout(() => {
    console.log(new Date())
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}

export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

export const pickerOptions = [
  {
    text: '今天',
    onClick(picker) {
      const end = new Date()
      const start = new Date(new Date().toDateString())
      end.setTime(start.getTime())
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一周',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString())
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]

export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  for (const keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys])
      } else {
        targetObj[keys] = source[keys]
      }
    }
  }
  return targetObj
}

export function getStringTime(day) {
  const d = new Date();
  const t = d.getTime() - day * 24 * 3600 * 1000;
  d.setTime(t);
  return d
}

export function hideMobile(phone) {
  return phone.slice(0, 3) + '****' + phone.slice(-4)
}
const platformName = {
  douyu: '斗鱼',
  huya: '虎牙',
  quanmin: '全民',
  panda: '熊猫',
  zhanqi: '战旗',
  longzhu: '龙珠',
  chushou: '触手'
}

const platformUrl = {
  douyu: 'https://www.douyu.com/',
  huya: 'http://www.huya.com/',
  quanmin: 'https://www.quanmin.tv/',
  panda: 'https://www.panda.tv/',
  zhanqi: 'https://www.zhanqi.tv/',
  longzhu: 'http://longzhu.com/',
  chushou: 'https://chushou.tv/'
}
export function MapPlat(plat) {
  return platformName[plat] || plat
}

export function showFollow(num) {
  if(num==-1){
    return '-'
  }
  return num;
}

export function ShowPlatUrl(plat) {
  return platformUrl[plat]
}

function addProtocol(protocol,str) {
  let flag = str.match('http') || str.match('https');
  if(!flag){
    return protocol+'://'+str;
  }
  return str;
}
export function MatchPlatUrl(str,plat) {
  let flag = '';
  switch(plat){
    case 'douyu':
      str=addProtocol('https',str);
      flag = str.match('https://www.douyu.com') || str.match('http://www.douyu.com');
      break;
    case 'huya':
      str=addProtocol('https',str);
      flag = str.match('http://www.huya.com') || str.match('https://www.huya.com');
      break;
    case 'quanmin':
      str=addProtocol('https',str);
      flag = str.match('https://www.quanmin.tv') || str.match('http://www.quanmin.tv');
      break;
    case 'panda':
      str=addProtocol('https',str);
      flag = str.match('https://www.panda.tv') || str.match('https://xingyan.panda.tv') || str.match('http://www.panda.tv') || str.match('http://xingyan.panda.tv');
      break;
    case 'zhanqi':
      str=addProtocol('https',str);
      flag = str.match('https://www.zhanqi.tv') || str.match('http://www.zhanqi.tv');
      break;
    case 'longzhu':
      str=addProtocol('http',str);
      flag = str.match('http://star.longzhu.com') || str.match('http://y.longzhu.com');
      break;
    case 'chushou':
      str=addProtocol('https',str);
      flag = str.match('https://www.chushou.tv') || str.match('http://www.chushou.tv');
      break;
    default:
      break;
  }
  if ( !flag ){
    return false;
  }else{
    return true;
  }
}


export function canvasWaterMark() {
  let waterMarkText = '直播宝数据';
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  canvas.width = canvas.height = 150;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.globalAlpha = 0.08;
  ctx.font = '20px Microsoft Yahei';
  ctx.translate(50, 50);
  ctx.rotate(-Math.PI / 4);
  ctx.fillText(waterMarkText, 0, 0);
  return canvas;
}

export function duplicateObj(arr) {
  let result = [];
  arr.forEach(obj=>{
    if(!result.some( item=>{ return item.id === obj.id }) ){
      result.push(obj);
    }
  });
  return result;
}
export function filterName(val) {
  let msg = true;
  if(val === NaN||val === undefined||val === null||val ===''){
    msg = false
  }
  return msg ;
}

export function bindThird(type,uid) {
  let str = '';
  if(uid){
    str = "&url=center&uid="+uid
  }
  const url = encodeURIComponent("http://www.zhibobao.com/static/boot/thirdlogin/loginpage.html?target=gonghui&type=1&plat="+type+str);
  switch (type){
    case "wechat":
      location.href = 'https://open.weixin.qq.com/connect/qrconnect?appid=wxa21716b27a9c28ca&redirect_uri='+url+'&response_type=code&scope=snsapi_login&state=cAbMg30SdYC9be38eZfr#wechat_redirect';
      break;
    case "qq":
      location.href = 'https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101444155&redirect_uri='+url+'&state=jiL2KY5camdrlr1g6Ymn'
      break;
    case "weibo":
      location.href='https://api.weibo.com/oauth2/authorize?client_id=1303830446&redirect_uri='+url+'&response_type=code';
      break;
    default:
      break;
  }
}



