// miniprogram/pages/cloud/cloud.js
import {requestService} from "../../services/request-service";
import {authenService} from "../../services/authen-service";
// var app:any = getApp<any>();
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
      this.isCollect();
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
    // 判断该宣讲会是否被用户收藏
    isCollect(){
        const that = this as any;
        const business = authenService.getUserId();
        // 获取该用户收藏的所有宣讲会
        requestService.get('collect/onlinePresentations/user',{business},{},true,true)
            .then(res => {
                for (let item of res.data.data) {
                    if (item.id == that.data.cloudData.id) {
                        // 如果收藏包含该宣讲会，则设为已收藏
                        that.setData({
                            isCollected:true
                        });
                    }
                }
                // res.data.data.forEach((item:any)=>{
                //     if (item.id == that.cloudData.id) {
                //         // 如果收藏包含该宣讲会，则设为已收藏
                //         that.setData({
                //             isCollected:true
                //         });
                //     }
                // });
            })

    },
    // 点击收藏
    clickCollect(){
    const that = this as any;
    if (authenService.getUserId()) {
        // 判断状态是已收藏还是未收藏
        if (that.data.isCollected) {
            // 已收藏 则点击为取消收藏
            requestService.post('collect/onlinePresentations',{
                opid:that.data.cloudData.id,
                uid:authenService.getUserId(),
            }).then(res=>{
                console.log('取消收藏',res);
                that.setData({
                    isCollected:false
                });
            })
        }else {
            // 未收藏 则点击收藏
            requestService.post('collect/onlinePresentations',{
                opid:that.data.cloudData.id,
                uid:authenService.getUserId(),
            }).then(res=>{
                console.log('收藏',res);
                that.setData({
                    isCollected:true
                });
            })
        }

    }else {
        wx.showModal({
            title: '提示',
            content: '请先登录',
            success (res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                    wx.switchTab({
                        url:'../my/my',
                    });
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    }

    },
})