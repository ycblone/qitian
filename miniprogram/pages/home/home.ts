// // miniprogram/pages/home/home.js
import {requestService} from "../../services/request-service";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollHeight:'',
        background: [
            "../../img/swiperA.jpg",
            "../../img/swiperB.jpg",
            "../../img/swiperC.jpg"
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500,
        indexImg: 0,
        // 下拉菜单
        option:[
            {name:'互联网'},
            {name:'金融'},
            {name:'土木工程'},
            {name:'化学与环境测试'},
            {name:'生物结构与社会人文'},
            {name:'天地人和草木共生万物和谐'},
            {name:'互联网'},
            {name:'互联网'},
            {name:'互联网'},
            {name:'互联网'},
        ],
        // 存标签下标的数组
        optionShow:[],
        // 是否显示labelBox
        labelBoxIsNull:true,
        itemTitle:'行业',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        let that = this as any;
        // 给数据添加是否选中字段
        for (let i = 0; i < that.data.option.length; i++) {
            var option = "option["+i+"].isSelect";
            that.setData({
                [option]:false
            });
        }
        // 轮播图
        this.getBarImg();
        console.log(that.data.option);
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
                selected: 0
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
    onShareAppMessage: function () :any{

    },
    // 轮播图
    getBarImg(){
        requestService.get('onlinePresentationsBanners/',{})
            .then(res=>{
                console.log(res);
            })
    },
    indexChange(event:any){
        let that = this as any;
        console.log(event);
        var index = event.detail.current;
        that.setData({
            indexImg: index
        })
    },
    // 点击标签触发
    clickLabel(event:any){
        let that = this as any;
        // 点击标签切换对应标签选中状态
        console.log(event.currentTarget.dataset.info);
        const info = event.currentTarget.dataset.info;
        let isSelect = that.data.option[info].isSelect;
        var option = "optionShow["+info+"]";
        if (!isSelect){
            //isSelect为false 如果即将被点亮，则将其下标info加入optionShow数组的info位置 以便删除的时候好找到
            that.setData({
                [option]:info
            });
        } else {
            // 为true，即将被取消，则要找到对应info位置将其置空
            // 这里赋值null比赋值undefined和空要好
            that.setData({
                [option]:null
            });
        }
        // 改变标签选中状态
        var option = "option["+info+"].isSelect";
        that.setData({
            [option]:!isSelect
        });
        // 遍历option，如果标签都未被选中，则labelBox为空，赋给labelBoxIsNull ：true 在wxml上不予显示
        let isNull = true;
        that.data.option.forEach((item:any)=>{
            if (item.isSelect) {
                isNull = false;
            }
        })
        that.setData({
            labelBoxIsNull:isNull
        });

    },
    // 获取剩下高度给scrollview用
    computeScrollViewHeight() {
        const that = this as any;
        // 返回一个 SelectorQuery 对象实例
        let query = wx.createSelectorQuery();
        // 在当前页面下选择第一个匹配选择器 selector 的节点。返回一个 NodesRef 对象实例，可以用于获取节点信息
        query.select('.swiper-wrap').boundingClientRect();
        query.select('.contentHead').boundingClientRect();
        // 执行所有的请求。请求结果按请求次序构成数组，在callback的第一个参数中返回
        query.exec(res => {
            let swiperHeight = res[0].height;
            let headHeight = res[1].height;
            // wx.getSystemInfoSync() 可以得到设备的各种信息，关于高度的参数有两个，一个是屏幕高度 screenHeight，一个是可使用窗口高度 windowHeight。注意计算的时候要用 windowHeight，这样算出来的高度才是对的。screenHeight是手机的屏幕高度，包含了手机的状态栏和小程序标题栏。
            let windowHeight = wx.getSystemInfoSync().windowHeight;
            // 50是tab高度
            let scrollHeight = windowHeight - swiperHeight - headHeight - 50;
            that.setData({
                scrollHeight: scrollHeight
            })
        })
    },
    toCloud(){
        wx.navigateTo({
            url:'../cloud/cloud'
        })
    }
})
