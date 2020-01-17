"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = require("../../services/request-service");
const authen_service_1 = require("../../services/authen-service");
var app = getApp();
Page({
    data: {
        videoUrl: '',
        hasVideo: false,
        cloudData: '',
        isCollected: false
    },
    onLoad: function (option) {
        this.setData({
            cloudData: JSON.parse(option.data)
        });
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            console.log(res.target);
        }
        return {
            title: '自定义转发标题',
            path: '/pages/cloud?'
        };
    },
    clickCollect() {
        const that = this;
        that.setData({
            isCollected: !that.data.isCollected
        });
        request_service_1.requestService.post('collect/onlinePresentations', {
            opid: that.data.cloudData.id,
            uid: authen_service_1.authenService.getUserId(),
        }).then(res => {
            console.log('收藏', res);
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG9FQUE4RDtBQUM5RCxrRUFBNEQ7QUFDNUQsSUFBSSxHQUFHLEdBQU8sTUFBTSxFQUFPLENBQUM7QUFDNUIsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBQyxFQUFFO1FBQ1osV0FBVyxFQUFDLEtBQUs7S0FDcEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxNQUFVO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxTQUFTLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRSxVQUFVLEdBQUc7UUFDNUIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUMxQjtRQUNELE9BQU87WUFDSCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsZUFBZTtTQUN4QixDQUFBO0lBQ0wsQ0FBQztJQUVDLFlBQVk7UUFDWixNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFdBQVcsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNyQyxDQUFDLENBQUM7UUFDSCxnQ0FBYyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBQztZQUM5QyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMzQixHQUFHLEVBQUMsOEJBQWEsQ0FBQyxTQUFTLEVBQUU7U0FDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUEsRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1pbmlwcm9ncmFtL3BhZ2VzL2Nsb3VkL2Nsb3VkLmpzXHJcbmltcG9ydCB7cmVxdWVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9yZXF1ZXN0LXNlcnZpY2VcIjtcclxuaW1wb3J0IHthdXRoZW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVuLXNlcnZpY2VcIjtcclxudmFyIGFwcDphbnkgPSBnZXRBcHA8YW55PigpO1xyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgICB2aWRlb1VybDogJycsXHJcbiAgICAgIGhhc1ZpZGVvOiBmYWxzZSxcclxuICAgICAgY2xvdWREYXRhOicnLFxyXG4gICAgICBpc0NvbGxlY3RlZDpmYWxzZVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uOmFueSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY2xvdWREYXRhOkpTT04ucGFyc2Uob3B0aW9uLmRhdGEpXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ6L2s5Y+R5qCH6aKYJyxcclxuICAgICAgICAgIHBhdGg6ICcvcGFnZXMvY2xvdWQ/J1xyXG4gICAgICB9XHJcbiAgfSxcclxuICAgIC8vIOeCueWHu+aUtuiXj1xyXG4gICAgY2xpY2tDb2xsZWN0KCl7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBhbnk7XHJcbiAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgIGlzQ29sbGVjdGVkOiF0aGF0LmRhdGEuaXNDb2xsZWN0ZWRcclxuICAgIH0pO1xyXG4gICAgcmVxdWVzdFNlcnZpY2UucG9zdCgnY29sbGVjdC9vbmxpbmVQcmVzZW50YXRpb25zJyx7XHJcbiAgICAgICAgb3BpZDp0aGF0LmRhdGEuY2xvdWREYXRhLmlkLFxyXG4gICAgICAgIHVpZDphdXRoZW5TZXJ2aWNlLmdldFVzZXJJZCgpLFxyXG4gICAgfSkudGhlbihyZXM9PntcclxuICAgICAgICBjb25zb2xlLmxvZygn5pS26JePJyxyZXMpO1xyXG4gICAgfSlcclxuICAgIH0sXHJcbn0pIl19