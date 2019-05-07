import Mock from 'mockjs';

export default {
  getAnchorInfo: config => {
    let info = Mock.mock({
      'nickname': '@cname',
      'avatar': 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      'platform|1': ['斗鱼', '熊猫', '全民'],
      'category|1': ['英雄联盟', '王者荣耀', '二次元'],
      'roomid|123456-12345678910': 123456,
      'follow|1-10000000': 1,
      'liveDays|1-30': 1,
      'beyondCount|1-100': 1
    });

    info.beyondCount += '%';
    return info;
  }
}