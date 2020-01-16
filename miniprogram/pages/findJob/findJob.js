"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = require("../../services/request-service");
Page({
    data: {
        scrollHeight: '',
        jobSession: ''
    },
    onLoad: function () {
        const that = this;
        that.getJobSession();
    },
    onReady: function () {
        const that = this;
        that.computeScrollViewHeight();
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 2
            });
        }
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    },
    getJobSession() {
        const that = this;
        request_service_1.requestService.get('internship/', {})
            .then(res => {
            that.setData({
                jobSession: res.data.data
            });
        });
    },
    computeScrollViewHeight() {
        const that = this;
        let query = wx.createSelectorQuery();
        query.select('.headTop').boundingClientRect();
        query.select('.headBottom').boundingClientRect();
        query.exec(res => {
            let headTopHeight = res[0].height;
            let headBottomHeight = res[1].height;
            let windowHeight = wx.getSystemInfoSync().windowHeight;
            let scrollHeight = windowHeight - headTopHeight - headBottomHeight - 50;
            that.setData({
                scrollHeight: scrollHeight
            });
        });
    },
    toPractice(event) {
        let info = event.currentTarget.dataset.info;
        const sendData = JSON.stringify(this.data.jobSession[info]);
        wx.navigateTo({
            url: 'practiceMore?data=' + sendData
        });
    }
});
