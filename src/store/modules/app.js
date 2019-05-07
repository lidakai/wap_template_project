import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    type_select:{
      group:"",
      plat:"",
      category:''
    },
    guild_type:{
      group:[],
      platform:[],
      category:[]
    },
    total_type:[],
    platform:[],
    category:[],
    special_manager:[],
    anchorInfo:{
      platform:'---',
      roomId:'---',
      platName:"斗鱼",
      avatar:"",
      nickname:'----',
      category:'---',
      nowThirty:{
        price:0,//收益
        timeLong:0,// 日均时长
        online:0,// 日均在线
        barPeoNum:0,// 日均弹幕人数
        rewardPerson:0,// 日均打赏人数
        addFollower:0,// 日均新增关注数
        days:0,// 直播天数
        effectiveDays:0,// 有效直播天数
        rank:0,// 工会排行
        average_price:0,//日均收益
      }, // 当前 30 天
      passThirty:{
        price:0,//收益
        timeLong:0,// 日均时长
        online:0,// 日均在线
        barPeoNum:0,// 日均弹幕人数
        rewardPerson:0,// 日均打赏人数
        addFollower:0,// 日均新增关注数
        days:0,// 直播天数
        effectiveDays:0,// 有效直播天数
        rank:0,// 工会排行
      }, // 过去 30 天
      compare:true,
      percent:"--",

    },
    audienceInfo:{
      audienceNickname:"-",
      platName:"-"
    },
    comparison:[],
    guildInfo:{
      unionName:"",
      unionPlat :[],
      unionCate :[],
      unionIntroduction:'',
      contactOpenid:'',
      unionLogoUrl:'',
      contactType:1
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    CHANGE_TYPE: (state, type_select)=> {
      state.type_select = type_select;
    },
    SET_PLATFORM: (state, platform)=>{
      state.platform = platform;
    },
    SET_CATEGORY: (state, category)=>{
      state.category = category;
    },
    SET_GUILD_TYPE: (state, guild_type)=>{
      state.guild_type = guild_type;
    },
    SET_SPECIAL_MANAGER: (state, special_manager)=>{
      state.special_manager = special_manager;
    },
    SET_GUILDINFO: (state, guildInfo) => {
      state.guildInfo = guildInfo;
    },
    SET_TOTAL_TYPE: (state, total_type) => {
      state.total_type = total_type
    },
    SET_ANCHOR_INFO:(state, anchorInfo) => {
      state.anchorInfo = anchorInfo
    },
    SET_AUDIENCE_INFO:(state, audienceInfo)=>{
      state.audienceInfo = audienceInfo
    },
    SET_COMPARISON:(state,comparison)=>{
      state.comparison = comparison
    }
  },
  actions: {
    toggleSideBar() {
      commit('TOGGLE_SIDEBAR')
    },
    changeType({ commit }, type_select){
      commit('CHANGE_TYPE', type_select);
    //  用户选中的三个分类
    },
    set_platform({commit}, platform){
      commit('SET_PLATFORM',platform)
    },
    set_category({commit}, category){
        commit('SET_CATEGORY',category)
    },
    set_guild_type({commit}, guild_type){
      commit('SET_GUILD_TYPE',guild_type);
    //  经过处理后的三个分类对象
    },
    set_special_manager({commit}, special_manager){
      commit('SET_SPECIAL_MANAGER',special_manager)
    //  得到授权查看信息的经纪人
    },
    set_guildInfo({commit}, guildInfo){
      commit('SET_GUILDINFO',guildInfo)
      //  公会信息
    },
    set_total_type({commit}, total_type){
      commit('SET_TOTAL_TYPE',total_type)
      //  公会三级分类的所有数据
    },
    set_anchor_info({commit}, anchorInfo){
      commit('SET_ANCHOR_INFO',anchorInfo)
    },
    set_audience_info({commit}, audienceInfo){
      commit('SET_AUDIENCE_INFO',audienceInfo)
    },
    set_comparison({commit}, comparison){
      commit('SET_COMPARISON',comparison)
    }
  }
}

export default app
