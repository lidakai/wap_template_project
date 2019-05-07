import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
// import {getToken} from '@/utils/auth' // 验权

const whiteList = ['/login', '/404'];// 不重定向白名单


router.beforeEach(async (to, from, next) => {
  await NProgress.start(); // 开启Progress
  await next();
  await NProgress.done() // 结束Progress
});

router.afterEach(() => {
  NProgress.done() // 结束Progress
});


