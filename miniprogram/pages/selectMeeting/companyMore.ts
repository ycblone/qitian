// miniprogram/pages/selectMeeting/companyMore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    companyMoreData:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option:any) {
      const that = this as any;
      that.setData({
          companyMoreData:JSON.parse(option.data)
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
  onShareAppMessage: function ():any {

  },
    // 进入工作详情
    toJobMore(event:any){
    const that =this as any;
        let info = event.currentTarget.dataset.info;
        const sendData = JSON.stringify(that.data.companyMoreData.posts[info]);
        const sendTotalData = JSON.stringify(that.data.companyMoreData);
        wx.navigateTo({
          url:'jobMore?data='+sendData+'&&totalData='+sendTotalData
      })
    }

})