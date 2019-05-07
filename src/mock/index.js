import Mock from 'mockjs'
import loginAPI from './login'
import articleAPI from './article'
import remoteSearchAPI from './remoteSearch'
import transactionAPI from './transaction'
import user from './user';

Mock.setup({
  timeout: '350-600'
})


// // 文章相关
// Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
// Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
// Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
// Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
// Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)
//
// // 搜索相关
// Mock.mock(/\/search\/user/, 'get', remoteSearchAPI.searchUser)
//
// // 账单相关
// Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)
//
// // 用户信息
// Mock.mock(/\/user\/anchorInfo/, 'post', user.getAnchorInfo);

export default Mock
