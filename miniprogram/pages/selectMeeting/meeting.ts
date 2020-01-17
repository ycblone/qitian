// miniprogram/pages/selectMeeting/meeting.js
import {requestService} from "../../services/request-service";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      scrollHeight:'',
      isArea:false,
      // region: ['广东省', '广州市', '海珠区'],
      // customItem: '全部',
      region:[],
      regionIndex:'',
      id:'',
      titleMeeting:'',
      startTime:false,
      endTime:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option:any) {
      const that = this as any;
      that.setData({
          id:option.id
      });
      if (option.id == 1) {
          that.setData({
              isArea:false
          });
          that.getTitleMeeting();
          wx.setNavigationBarTitle({
              title: '专题双选会'
          });
      }else {
          that.setData({
              isArea:true
          });
          that.getTitleMeeting();
          wx.setNavigationBarTitle({
              title: '区域招聘会'
          });
      }
        that.getRegion();

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
    // 根据id获取专题双选会或区域双选会
    getTitleMeeting(){
        const that = this as any;
        const business = that.data.id;
      requestService.get("dualSelectType/dualSelects/",{business},{},true,true)
          .then(res=>{
              console.log(res);
              that.setData({
                  titleMeeting:res.data.data
              });

          })
    },
    // 获取剩余高度
    computeScrollViewHeight() {
        const that = this as any;
        // 返回一个 SelectorQuery 对象实例
        let query = wx.createSelectorQuery();
        // 在当前页面下选择第一个匹配选择器 selector 的节点。返回一个 NodesRef 对象实例，可以用于获取节点信息
        query.select('.timeBox').boundingClientRect();
        // 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回
        query.exec(res => {
            let timeSelectHeight = res[0].height;
            // wx.getSystemInfoSync() 可以得到设备的各种信息，关于高度的参数有两个，一个是屏幕高度 screenHeight，一个是可使用窗口高度 windowHeight。注意计算的时候要用 windowHeight，这样算出来的高度才是对的。screenHeight是手机的屏幕高度，包含了手机的状态栏和小程序标题栏。
            let windowHeight = wx.getSystemInfoSync().windowHeight;
            let scrollHeight = windowHeight - timeSelectHeight;
            that.setData({
                scrollHeight: scrollHeight
            })
        })
    },
    // 地区选择器
    bindRegionChange(event:any){
        console.log('event',event.detail);
        const that = this as any;
        that.setData({
            regionIndex:event.detail.value
        });
        const business = that.data.region[event.detail.value];
        requestService.get('dualSelect/address/',{business},{},true,true)
            .then(res=>{
                that.setData({
                    titleMeeting:res.data.data
                });
            })
    },
    // 获取区域信息
    getRegion(){
        const that = this as any;
        requestService.get('dualSelect/address',{})
          .then(res=>{
              that.setData({
                  region:res.data.data
              });
          })
    },
    // 点击按时间排序
    clickAsc(event:any){
      const that = this as any;
        let info = event.currentTarget.dataset.info;
        // 为0是开始时间排序 1：结束时间排序
        if (info) {
            that.setData({
                startTime:false,
                endTime:!that.data.endTime,
            });
            const business = that.data.id + '/time/expirationDate/asc';
            requestService.get("dualSelect/dualSelectType/",{business},{},true,true)
                .then(res=>{
                    that.setData({
                        titleMeeting:res.data.data
                    });
                })
        }else {
            // 开始时间排序
            that.setData({
                startTime:!that.data.startTime,
                endTime:false,
            });
            const business = that.data.id + '/time/startDate/asc';
            requestService.get("dualSelect/dualSelectType/",{business},{},true,true)
                .then(res=>{
                    that.setData({
                        titleMeeting:res.data.data
                    });
                })
        }
    },
    // 进入招聘会
    toMore(event:any){
      let info = event.currentTarget.dataset.info;
      const sendData = JSON.stringify(this.data.titleMeeting[info]);
      wx.navigateTo({
          url:'meetingMore?data='+sendData
      })
    }
})