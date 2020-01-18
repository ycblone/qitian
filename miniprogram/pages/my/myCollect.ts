// miniprogram/pages/my/myCollect.js
import {requestService} from "../../services/request-service";
import {authenService} from "../../services/authen-service";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      activeName:["1"],
      onlineClass:'',
      tempJob:'',
      myCompany:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getMyCollect();
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
  onShareAppMessage: function ():any {

  },
    // 手风琴切换
    onChange(event:any){
        this.setData({
            activeName: event.detail
        });
    },
    // 获取我的三个收藏
    getMyCollect(){
    const that = this as any;
    // const business = authenService.getUserId();
    const business = '2';
      requestService.get('collect/onlinePresentations/user/',{business},{},true,true)
          .then(res=>{
             that.setData({
                 onlineClass:res.data.data
             });
          })
        requestService.get('collect/internshipCollect/user/',{business},{},true,true)
            .then(res=>{
                that.setData({
                    tempJob:res.data.data
                });
            })
        requestService.get('collect/companyCollect/user/',{business},{},true,true)
            .then(res=>{
                that.setData({
                    myCompany:res.data.data
                });
            })
    },
    toCompany(){
        const companyData = JSON.stringify(this.data.myCompany);
    wx.navigateTo({
        url:'../selectMeeting/jobMore?data='+companyData
    })
    },
    toTempJob(){
        const jobData = JSON.stringify(this.data.tempJob);
        wx.navigateTo({
            url:'../findJob/practiceMore?data='+jobData
        })
    },
    toOnlineClass(){
        const classData = JSON.stringify(this.data.onlineClass);
        wx.navigateTo({
            url:'../cloud/cloud?data='+this.data.onlineClass
        })
    },
})