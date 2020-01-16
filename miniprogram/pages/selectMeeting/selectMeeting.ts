// miniprogram/pages/selectMeeting/selectMeeting.js
import {requestService} from "../../services/request-service";

Page({

  /**
   * 页面的初始数据
   */
  data: {
        selectTypeSession:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      const that = this as any;
      that.getAllSelectType();
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
              selected: 1
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
    // 获取全部双选会的类型、 id……
    getAllSelectType(){
        const that = this as any;
        requestService.get('dualSelectType/',{})
          .then(res=>{
              that.setData({
                  selectTypeSession:res.data.data
              })
          })
    },
    toSelectMore(event:any){
      const id = event.currentTarget.dataset.info;
        if (id > 1) {
            wx.navigateTo({
                url:'meeting?id='+id
            })
        }else {
            wx.navigateTo({
                url:'meeting?id='+id
            })
        }
    },
})