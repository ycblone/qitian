// // miniprogram/pages/home/home.js
import {requestService} from "../../services/request-service";
import {authenService} from "../../services/authen-service";

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
            // {name:'互联网'},
            // {name:'金融'},
            // {name:'土木工程'},
            // {name:'化学与环境测试'},
            // {name:'生物结构与社会人文'},
            // {name:'天地人和草木共生万物和谐'},
            // {name:'互联网'},
            // {name:'互联网'},
            // {name:'互联网'},
            // {name:'互联网'},
        ],
        // 存标签下标的数组
        // optionShow:[],
        // 存标签下标
        optionShow:'',
        // 是否显示labelBox
        labelBoxIsNull:true,
        itemTitle:'行业',
        // 线上宣讲会详情
        onlineSession:'',
        // 是否是往届
        isHistory:'',
        isMyCollected:'',
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
        this.getOnlineSession();
        this.getAllBusiness();

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
                console.log('轮播',res);
            })
    },
    // 线上宣讲详情
    getOnlineSession(){
        const that = this as any;
        requestService.get('onlinePresentations/',{}).then(res=>{
            // 将后台时间格式化为01-15 04:15格式
            for (let i = 0; i < res.data.data.length; i++) {
                res.data.data[i].updateDate = this.timeHandle(res.data.data[i].updateDate);
            }
            that.setData({
                onlineSession:res.data.data
            });
        })
    },
    // 时间处理函数
    timeHandle(dateTime:string){
        let date = dateTime.split(' ')[0];
        let time = dateTime.split(' ')[1];
        let dateNew = date.split('-')[1] + '-' + date.split('-')[2];
        let timeNew = time.split(':')[0] + ':' + time.split(':')[1];
        return (dateNew + ' ' + timeNew);
    },
    indexChange(event:any){
        let that = this as any;
        console.log(event);
        var index = event.detail.current;
        that.setData({
            indexImg: index
        })
    },
    // 搜索框
    // 点击完成
    searchInput(e:any){
        const that = this as any;
        that.getAllBusiness(e.detail.value);
        const business = e.detail.value;
        requestService.get('onlinePresentations/keyword/',{business},{},true,true)
            .then(res=>{
                that.setData({
                    onlineSession:res.data.data
                });
            })
    },
    // 失焦时
    searchIsNull(e:any){
        const that = this as any;
        // 若输入框为空，则查询所有
        if (!e.detail.value) {
            that.getOnlineSession();
        }
    },
    // 点击标签触发（单选）
    clickLabel(event:any){
        const that = this as any;
        // 点击标签切换对应标签选中状态
        console.log(event.currentTarget.dataset.info);
        const info = event.currentTarget.dataset.info;
        let isSelect = that.data.option[info].isSelect;
        var option = "option["+info+"].isSelect";
        if (!isSelect){
            //isSelect为false 如果即将被点亮，则将其下标info存入optionShow 以便点亮另一个的时候好找到它取消点亮
            // 改变标签选中状态
            var selected = "option["+that.data.optionShow+"].isSelect";
            that.setData({
                [option]:!isSelect
            });
            // 取消上一个点亮的标签
            if (that.data.optionShow!=='') {
                that.setData({
                    [selected]:!that.data.option[that.data.optionShow].isSelect
                });
            }
            // 存入点亮标签的info
            that.setData({
                optionShow:info
            });
        } else {
            // 取消标签选中状态 置''给optionShow
            that.setData({
                [option]:!isSelect,
                optionShow:''
            });
        }
        // 如果optionShow为空，说明没有标签被选中 则labelBox为空，赋给labelBoxIsNull ：true 在wxml上不予显示
        let isNull = true;
        if (that.data.optionShow === '') {
            isNull = true;
            // 标签被取消则查询显示所有的宣讲会
            that.getOnlineSession();
        }else {
            isNull = false;
            that.getAllBusiness(that.data.option[that.data.optionShow].name);
        }
        that.setData({
            labelBoxIsNull:isNull
        });
    },
    // 点击标签触发（可多选）
    // clickLabel(event:any){
    //     let that = this as any;
    //     // 点击标签切换对应标签选中状态
    //     console.log(event.currentTarget.dataset.info);
    //     const info = event.currentTarget.dataset.info;
    //     let isSelect = that.data.option[info].isSelect;
    //     var option = "optionShow["+info+"]";
    //     if (!isSelect){
    //         //isSelect为false 如果即将被点亮，则将其下标info加入optionShow数组的info位置 以便删除的时候好找到
    //         that.setData({
    //             [option]:info
    //         });
    //     } else {
    //         // 为true，即将被取消，则要找到对应info位置将其置空
    //         // 这里赋值null比赋值undefined和空要好
    //         that.setData({
    //             [option]:null
    //         });
    //     }
    //     // 改变标签选中状态
    //     var option = "option["+info+"].isSelect";
    //     that.setData({
    //         [option]:!isSelect
    //     });
    //     // 遍历option，如果标签都未被选中，则labelBox为空，赋给labelBoxIsNull ：true 在wxml上不予显示
    //     let isNull = true;
    //     that.data.option.forEach((item:any)=>{
    //         if (item.isSelect) {
    //             isNull = false;
    //         }
    //     })
    //     that.setData({
    //         labelBoxIsNull:isNull
    //     });
    //
    // },
    // 查询所有行业或按行业查询宣讲会
    getAllBusiness(business?:string){
        const that = this as any;
        if (business) {
            // 按行业查询
            requestService.get('onlinePresentations/business/',{business},{},true,true)
                .then(res=>{
                    that.setData({
                        onlineSession:res.data.data
                    });
                })
        }else {
            // 所有
            requestService.get('onlinePresentations/business/',{})
                .then(res=>{
                    that.setData({
                        option:res.data.data
                    });

                })
        }

    },
    // 往届生筛选
    isHistory(){
        const that = this as any;
        if (that.data.isHistory == ''){
            that.setData({
                isHistory:true
            });
        }else {
            that.setData({
                isHistory:!that.data.isHistory
            });
        }

    },
    // 展示已收藏
    isMyCollect(){
        const that = this as any;
        const business = authenService.getUserId();
        if (that.data.isMyCollected){
            // 点击取消查看我的收藏，查询所有
            that.setData({
                isMyCollected:!that.data.isMyCollected
            });
            // 所有
            requestService.get('onlinePresentations/',{})
                .then(res=>{
                    that.setData({
                        onlineSession:res.data.data
                    });

                })
        }else {
            // 点击查看我的收藏
            that.setData({
                isMyCollected:true
            });
            requestService.get("collect/onlinePresentations/user/",{business},{},true,true)
                .then(res=>{
                    that.setData({
                        onlineSession:res.data.data
                    });
                })
        }

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
    toCloud(e:any){
        const that = this as any;
        let info = e.currentTarget.dataset.info;
        let data = that.data.onlineSession[info];
        const sendData = JSON.stringify(data);
        wx.navigateTo({
            url:'../cloud/cloud?data=' + sendData
        })
    }
})
