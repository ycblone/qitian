"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = require("../../services/request-service");
const authen_service_1 = require("../../services/authen-service");
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
        this.isCollect();
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
    isCollect() {
        const that = this;
        const business = authen_service_1.authenService.getUserId();
        request_service_1.requestService.get('collect/onlinePresentations/user', { business }, {}, true, true)
            .then(res => {
            for (let item of res.data.data) {
                if (item.id == that.data.cloudData.id) {
                    that.setData({
                        isCollected: true
                    });
                }
            }
        });
    },
    clickCollect() {
        const that = this;
        if (authen_service_1.authenService.getUserId()) {
            if (that.data.isCollected) {
                request_service_1.requestService.post('collect/onlinePresentations', {
                    opid: that.data.cloudData.id,
                    uid: authen_service_1.authenService.getUserId(),
                }).then(res => {
                    console.log('取消收藏', res);
                    that.setData({
                        isCollected: false
                    });
                });
            }
            else {
                request_service_1.requestService.post('collect/onlinePresentations', {
                    opid: that.data.cloudData.id,
                    uid: authen_service_1.authenService.getUserId(),
                }).then(res => {
                    console.log('收藏', res);
                    that.setData({
                        isCollected: true
                    });
                });
            }
        }
        else {
            wx.showModal({
                title: '提示',
                content: '请先登录',
                success(res) {
                    if (res.confirm) {
                        console.log('用户点击确定');
                        wx.switchTab({
                            url: '../my/my',
                        });
                    }
                    else if (res.cancel) {
                        console.log('用户点击取消');
                    }
                }
            });
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG9FQUE4RDtBQUM5RCxrRUFBNEQ7QUFFNUQsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBQyxFQUFFO1FBQ1osV0FBVyxFQUFDLEtBQUs7S0FDcEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxNQUFVO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxTQUFTLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0lBS0QsaUJBQWlCLEVBQUUsVUFBVSxHQUFHO1FBQzVCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDMUI7UUFDRCxPQUFPO1lBQ0gsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLGVBQWU7U0FDeEIsQ0FBQTtJQUNMLENBQUM7SUFFQyxTQUFTO1FBQ0wsTUFBTSxJQUFJLEdBQUcsSUFBVyxDQUFDO1FBQ3pCLE1BQU0sUUFBUSxHQUFHLDhCQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFM0MsZ0NBQWMsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQzthQUN6RSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUixLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUM1QixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFO29CQUVuQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNULFdBQVcsRUFBQyxJQUFJO3FCQUNuQixDQUFDLENBQUM7aUJBQ047YUFDSjtRQVNMLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUVELFlBQVk7UUFDWixNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7UUFDekIsSUFBSSw4QkFBYSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBRTNCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBRXZCLGdDQUFjLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFDO29CQUM5QyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDM0IsR0FBRyxFQUFDLDhCQUFhLENBQUMsU0FBUyxFQUFFO2lCQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQSxFQUFFO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNULFdBQVcsRUFBQyxLQUFLO3FCQUNwQixDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUE7YUFDTDtpQkFBSztnQkFDRixnQ0FBYyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBQztvQkFDOUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQzNCLEdBQUcsRUFBQyw4QkFBYSxDQUFDLFNBQVMsRUFBRTtpQkFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUEsRUFBRTtvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxXQUFXLEVBQUMsSUFBSTtxQkFDbkIsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFBO2FBQ0w7U0FFSjthQUFLO1lBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxPQUFPLEVBQUUsTUFBTTtnQkFDZixPQUFPLENBQUUsR0FBRztvQkFDUixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7d0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0QkFDVCxHQUFHLEVBQUMsVUFBVTt5QkFDakIsQ0FBQyxDQUFDO3FCQUNOO3lCQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTt3QkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQkFDeEI7Z0JBQ0wsQ0FBQzthQUNKLENBQUMsQ0FBQTtTQUNMO0lBRUQsQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1pbmlwcm9ncmFtL3BhZ2VzL2Nsb3VkL2Nsb3VkLmpzXHJcbmltcG9ydCB7cmVxdWVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9yZXF1ZXN0LXNlcnZpY2VcIjtcclxuaW1wb3J0IHthdXRoZW5TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aGVuLXNlcnZpY2VcIjtcclxuLy8gdmFyIGFwcDphbnkgPSBnZXRBcHA8YW55PigpO1xyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgICB2aWRlb1VybDogJycsXHJcbiAgICAgIGhhc1ZpZGVvOiBmYWxzZSxcclxuICAgICAgY2xvdWREYXRhOicnLFxyXG4gICAgICBpc0NvbGxlY3RlZDpmYWxzZVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uOmFueSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY2xvdWREYXRhOkpTT04ucGFyc2Uob3B0aW9uLmRhdGEpXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmlzQ29sbGVjdCgpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgICAvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiAn6Ieq5a6a5LmJ6L2s5Y+R5qCH6aKYJyxcclxuICAgICAgICAgIHBhdGg6ICcvcGFnZXMvY2xvdWQ/J1xyXG4gICAgICB9XHJcbiAgfSxcclxuICAgIC8vIOWIpOaWreivpeWuo+iusuS8muaYr+WQpuiiq+eUqOaIt+aUtuiXj1xyXG4gICAgaXNDb2xsZWN0KCl7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgYW55O1xyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzID0gYXV0aGVuU2VydmljZS5nZXRVc2VySWQoKTtcclxuICAgICAgICAvLyDojrflj5bor6XnlKjmiLfmlLbol4/nmoTmiYDmnInlrqPorrLkvJpcclxuICAgICAgICByZXF1ZXN0U2VydmljZS5nZXQoJ2NvbGxlY3Qvb25saW5lUHJlc2VudGF0aW9ucy91c2VyJyx7YnVzaW5lc3N9LHt9LHRydWUsdHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgcmVzLmRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09IHRoYXQuZGF0YS5jbG91ZERhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5pS26JeP5YyF5ZCr6K+l5a6j6K6y5Lya77yM5YiZ6K6+5Li65bey5pS26JePXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NvbGxlY3RlZDp0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHJlcy5kYXRhLmRhdGEuZm9yRWFjaCgoaXRlbTphbnkpPT57XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGl0ZW0uaWQgPT0gdGhhdC5jbG91ZERhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8g5aaC5p6c5pS26JeP5YyF5ZCr6K+l5a6j6K6y5Lya77yM5YiZ6K6+5Li65bey5pS26JePXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpc0NvbGxlY3RlZDp0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICAvLyDngrnlh7vmlLbol49cclxuICAgIGNsaWNrQ29sbGVjdCgpe1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgYW55O1xyXG4gICAgaWYgKGF1dGhlblNlcnZpY2UuZ2V0VXNlcklkKCkpIHtcclxuICAgICAgICAvLyDliKTmlq3nirbmgIHmmK/lt7LmlLbol4/ov5jmmK/mnKrmlLbol49cclxuICAgICAgICBpZiAodGhhdC5kYXRhLmlzQ29sbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIC8vIOW3suaUtuiXjyDliJnngrnlh7vkuLrlj5bmtojmlLbol49cclxuICAgICAgICAgICAgcmVxdWVzdFNlcnZpY2UucG9zdCgnY29sbGVjdC9vbmxpbmVQcmVzZW50YXRpb25zJyx7XHJcbiAgICAgICAgICAgICAgICBvcGlkOnRoYXQuZGF0YS5jbG91ZERhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICB1aWQ6YXV0aGVuU2VydmljZS5nZXRVc2VySWQoKSxcclxuICAgICAgICAgICAgfSkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflj5bmtojmlLbol48nLHJlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQ29sbGVjdGVkOmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RTZXJ2aWNlLnBvc3QoJ2NvbGxlY3Qvb25saW5lUHJlc2VudGF0aW9ucycse1xyXG4gICAgICAgICAgICAgICAgb3BpZDp0aGF0LmRhdGEuY2xvdWREYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgdWlkOmF1dGhlblNlcnZpY2UuZ2V0VXNlcklkKCksXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5pS26JePJyxyZXMpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0NvbGxlY3RlZDp0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+WFiOeZu+W9lScsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDonLi4vbXkvbXknLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIH0sXHJcbn0pIl19