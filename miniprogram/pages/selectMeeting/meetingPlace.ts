// miniprogram/pages/selectMeeting/meetingPlace.js
import {requestService} from "../../services/request-service";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:'',
      companyData:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option:any) {
      const that = this as any;
      that.setData({
          id:option.id
      });
      that.getCompany();
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
    // 获取当前会场的公司
    getCompany(){
        const that = this as any;
        const business = that.data.id;
        requestService.get('dualSelect/companies/',{business},{},true,true)
            .then(res=>{
              that.setData({
                  companyData:res.data.data
              });
            })
    },
    // 进入公司详情
    toCompany(event:any){
        const that = this as any;
        let info = event.currentTarget.dataset.info;
        const sendData = JSON.stringify(that.data.companyData[info]);
        wx.navigateTo({
         url:'companyMore?data='+sendData
     })
    }
})