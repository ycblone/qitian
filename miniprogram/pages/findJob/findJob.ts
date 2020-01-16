// miniprogram/pages/findJob/findJob.js
import {requestService} from "../../services/request-service";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      scrollHeight:'',
      jobSession:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
      const that = this as any;
      that.getJobSession();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      const that = this as any;
      that.computeScrollViewHeight();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      if (typeof this.getTabBar === 'function' &&
          this.getTabBar()) {
          this.getTabBar().setData({
              selected: 2
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
    // 获取实习工作信息
    getJobSession(){
        const that = this as any;
        requestService.get('internship/',{})
          .then(res=>{
              that.setData({
                  jobSession:res.data.data
              });
          })
    },
    // 获取剩下高度给scrollview用
    computeScrollViewHeight() {
        const that = this as any;
        // 返回一个 SelectorQuery 对象实例
        let query = wx.createSelectorQuery();
        // 在当前页面下选择第一个匹配选择器 selector 的节点。返回一个 NodesRef 对象实例，可以用于获取节点信息
        query.select('.headTop').boundingClientRect();
        query.select('.headBottom').boundingClientRect();
        // 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回
        query.exec(res => {
            let headTopHeight = res[0].height;
            let headBottomHeight = res[1].height;
            // wx.getSystemInfoSync() 可以得到设备的各种信息，关于高度的参数有两个，一个是屏幕高度 screenHeight，一个是可使用窗口高度 windowHeight。注意计算的时候要用 windowHeight，这样算出来的高度才是对的。screenHeight是手机的屏幕高度，包含了手机的状态栏和小程序标题栏。
            let windowHeight = wx.getSystemInfoSync().windowHeight;
            // 50是tab高度
            let scrollHeight = windowHeight - headTopHeight - headBottomHeight - 50;
            that.setData({
                scrollHeight: scrollHeight
            })
        })
    },

    toPractice(event:any){
        let info = event.currentTarget.dataset.info;
        const sendData = JSON.stringify(this.data.jobSession[info]);
        wx.navigateTo({
          url:'practiceMore?data='+sendData
      })
    }
})