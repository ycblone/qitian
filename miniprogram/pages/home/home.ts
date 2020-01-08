// // miniprogram/pages/home/home.js
import {requestService} from "../../services/request-service";

Page({

    /**
     * 页面的初始数据
     */
    data: {
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

    }
})
