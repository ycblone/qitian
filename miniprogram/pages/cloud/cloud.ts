// miniprogram/pages/cloud/cloud.js
import {requestService} from "../../services/request-service";
import {authenService} from "../../services/authen-service";
var app:any = getApp<any>();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      videoUrl: '',
      hasVideo: false,
      cloudData:'',
      isCollected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option:any) {
      this.setData({
          cloudData:JSON.parse(option.data)
      });
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
  onShareAppMessage: function (res) {
      if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target)
      }
      return {
          title: '自定义转发标题',
          path: '/pages/cloud?'
      }
  },
    // 点击收藏
    clickCollect(){
    const that = this as any;
    that.setData({
        isCollected:!that.data.isCollected
    });
    requestService.post('collect/onlinePresentations',{
        opid:that.data.cloudData.id,
        uid:authenService.getUserId(),
    }).then(res=>{
        console.log('收藏',res);
    })
    },
})