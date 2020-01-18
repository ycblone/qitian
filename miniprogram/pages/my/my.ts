// miniprogram/pages/my/my.js
import {requestService} from "../../services/request-service";
import {authenService} from "../../services/authen-service";
var app:any = getApp<any>();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo: {},
      hasUserInfo: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      // 看缓存中是否还有用户信息
      if (authenService.getUserInfo()) {
          this.setData({
              userInfo: authenService.getUserInfo(),
              hasUserInfo: true,
          })
      }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      if (typeof this.getTabBar === 'function' &&
          this.getTabBar()) {
          this.getTabBar().setData({
              selected: 3
          })
      }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function ():any {

  },
    login(){
    const that = this as any;
        wx.login({
            success (res:any) {
                console.log("code",res.code);
                app.globalData.code=res.code;
                console.log("codeGLO",app.globalData.code);
                if (res.code) {
                    //发起网络请求
                    const business = app.globalData.code;
                    requestService.get('wx/code2Session/', {business},{},true,true)
                        .then((e:any)=>{
                        console.log("登录成功",e);
                        console.log("token",e.data.data.token);
                        // 引用自定义的authenService服务保存token 和 userId
                        authenService.saveToken(e.data.data.token);
                        authenService.saveUserId(e.data.data.user.id);

                    });

                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
    },
    // 获取用户信息
    getUserInfo(e: any) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        authenService.saveUserInfo(e.detail.userInfo);
        if (e.detail.userInfo) {
            this.setData({
                userInfo: e.detail.userInfo,
                hasUserInfo: true,
            })
            this.recordUserInfo();
        }

    },
    // 获取到用户信息后，拿其中的信息返回给后台，记录用户信息
    recordUserInfo(){
      requestService.post('user/',{
          id:authenService.getUserId(),
          nickName:app.globalData.userInfo.nickName,
          openid:'',
          session_key:'',
          unionid:''
      }).then(res=>{
          console.log("后台注册",res);
      })
    },
    // 进入我的收藏详情页
    toMyCollect(){
        wx.navigateTo({
            url:'myCollect'
        })
    },
})