"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = require("../../services/request-service");
Page({
    data: {
        scrollHeight: '',
        isArea: false,
        region: ['广东省', '广州市', '海珠区'],
        customItem: '全部',
        id: '',
        titleMeeting: ''
    },
    onLoad: function (option) {
        const that = this;
        that.setData({
            id: option.id
        });
        if (option.id == 1) {
            that.setData({
                isArea: false
            });
            that.getTitleMeeting();
            wx.setNavigationBarTitle({
                title: '专题双选会'
            });
        }
        else {
            that.setData({
                isArea: true
            });
            that.getTitleMeeting();
            wx.setNavigationBarTitle({
                title: '区域招聘会'
            });
        }
    },
    onReady: function () {
        const that = this;
        that.computeScrollViewHeight();
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
    onShareAppMessage: function () {
    },
    getTitleMeeting() {
        const that = this;
        const business = that.data.id;
        request_service_1.requestService.get("dualSelectType/dualSelects/", { business }, {}, true, true)
            .then(res => {
            console.log(res);
            that.setData({
                titleMeeting: res.data.data
            });
        });
    },
    computeScrollViewHeight() {
        const that = this;
        let query = wx.createSelectorQuery();
        query.select('.timeBox').boundingClientRect();
        query.exec(res => {
            let timeSelectHeight = res[0].height;
            let windowHeight = wx.getSystemInfoSync().windowHeight;
            let scrollHeight = windowHeight - timeSelectHeight;
            that.setData({
                scrollHeight: scrollHeight
            });
        });
    },
    bindRegionChange(event) {
        console.log('event', event);
    },
    toMore(event) {
        let info = event.currentTarget.dataset.info;
        const sendData = JSON.stringify(this.data.titleMeeting[info]);
        wx.navigateTo({
            url: 'meetingMore?data=' + sendData
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lZXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvRUFBOEQ7QUFFOUQsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0YsWUFBWSxFQUFDLEVBQUU7UUFDZixNQUFNLEVBQUMsS0FBSztRQUNaLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQzdCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEVBQUUsRUFBQyxFQUFFO1FBQ0wsWUFBWSxFQUFDLEVBQUU7S0FDbEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxNQUFVO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQVcsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsRUFBRSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNULE1BQU0sRUFBQyxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckIsS0FBSyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDO1NBQ047YUFBSztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsTUFBTSxFQUFDLElBQUk7YUFDZCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQixLQUFLLEVBQUUsT0FBTzthQUNqQixDQUFDLENBQUM7U0FDTjtJQUdMLENBQUM7SUFLRCxPQUFPLEVBQUU7UUFDTCxNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7UUFDekIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUVDLGVBQWU7UUFDWCxNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7UUFDekIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDaEMsZ0NBQWMsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQzthQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFBLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsWUFBWSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTthQUM3QixDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQTtJQUNSLENBQUM7SUFFRCx1QkFBdUI7UUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBVyxDQUFDO1FBRXpCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRXJDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRXJDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN2RCxJQUFJLFlBQVksR0FBRyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxZQUFZLEVBQUUsWUFBWTthQUM3QixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFTO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBUztRQUNkLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUM1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUQsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBQyxtQkFBbUIsR0FBQyxRQUFRO1NBQ25DLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9zZWxlY3RNZWV0aW5nL21lZXRpbmcuanNcclxuaW1wb3J0IHtyZXF1ZXN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3JlcXVlc3Qtc2VydmljZVwiO1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgICAgc2Nyb2xsSGVpZ2h0OicnLFxyXG4gICAgICBpc0FyZWE6ZmFsc2UsXHJcbiAgICAgIHJlZ2lvbjogWyflub/kuJznnIEnLCAn5bm/5bee5biCJywgJ+a1t+ePoOWMuiddLFxyXG4gICAgICBjdXN0b21JdGVtOiAn5YWo6YOoJyxcclxuICAgICAgaWQ6JycsXHJcbiAgICAgIHRpdGxlTWVldGluZzonJ1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uOmFueSkge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBhbnk7XHJcbiAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpZDpvcHRpb24uaWRcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChvcHRpb24uaWQgPT0gMSkge1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBpc0FyZWE6ZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhhdC5nZXRUaXRsZU1lZXRpbmcoKTtcclxuICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfkuJPpopjlj4zpgInkvJonXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBpc0FyZWE6dHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGF0LmdldFRpdGxlTWVldGluZygpO1xyXG4gICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+WMuuWfn+aLm+iBmOS8midcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgYW55O1xyXG4gICAgICB0aGF0LmNvbXB1dGVTY3JvbGxWaWV3SGVpZ2h0KCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpOmFueSB7XHJcblxyXG4gIH0sXHJcbiAgICAvLyDmoLnmja5pZOiOt+WPluS4k+mimOWPjOmAieS8muaIluWMuuWfn+WPjOmAieS8mlxyXG4gICAgZ2V0VGl0bGVNZWV0aW5nKCl7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgYW55O1xyXG4gICAgICAgIGNvbnN0IGJ1c2luZXNzID0gdGhhdC5kYXRhLmlkO1xyXG4gICAgICByZXF1ZXN0U2VydmljZS5nZXQoXCJkdWFsU2VsZWN0VHlwZS9kdWFsU2VsZWN0cy9cIix7YnVzaW5lc3N9LHt9LHRydWUsdHJ1ZSlcclxuICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGVNZWV0aW5nOnJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIOiOt+WPluWJqeS9memrmOW6plxyXG4gICAgY29tcHV0ZVNjcm9sbFZpZXdIZWlnaHQoKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgYW55O1xyXG4gICAgICAgIC8vIOi/lOWbnuS4gOS4qiBTZWxlY3RvclF1ZXJ5IOWvueixoeWunuS+i1xyXG4gICAgICAgIGxldCBxdWVyeSA9IHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKTtcclxuICAgICAgICAvLyDlnKjlvZPliY3pobXpnaLkuIvpgInmi6nnrKzkuIDkuKrljLnphY3pgInmi6nlmaggc2VsZWN0b3Ig55qE6IqC54K544CC6L+U5Zue5LiA5LiqIE5vZGVzUmVmIOWvueixoeWunuS+i++8jOWPr+S7peeUqOS6juiOt+WPluiKgueCueS/oeaBr1xyXG4gICAgICAgIHF1ZXJ5LnNlbGVjdCgnLnRpbWVCb3gnKS5ib3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAvLyDmiafooYzmiYDmnInnmoTor7fmsYLjgILor7fmsYLnu5PmnpzmjInor7fmsYLmrKHluo/mnoTmiJDmlbDnu4TvvIzlnKhjYWxsYmFja+eahOesrOS4gOS4quWPguaVsOS4rei/lOWbnlxyXG4gICAgICAgIHF1ZXJ5LmV4ZWMocmVzID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWVTZWxlY3RIZWlnaHQgPSByZXNbMF0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyB3eC5nZXRTeXN0ZW1JbmZvU3luYygpIOWPr+S7peW+l+WIsOiuvuWkh+eahOWQhOenjeS/oeaBr++8jOWFs+S6jumrmOW6pueahOWPguaVsOacieS4pOS4qu+8jOS4gOS4quaYr+Wxj+W5lemrmOW6piBzY3JlZW5IZWlnaHTvvIzkuIDkuKrmmK/lj6/kvb/nlKjnqpflj6Ppq5jluqYgd2luZG93SGVpZ2h044CC5rOo5oSP6K6h566X55qE5pe25YCZ6KaB55SoIHdpbmRvd0hlaWdodO+8jOi/meagt+eul+WHuuadpeeahOmrmOW6puaJjeaYr+WvueeahOOAgnNjcmVlbkhlaWdodOaYr+aJi+acuueahOWxj+W5lemrmOW6pu+8jOWMheWQq+S6huaJi+acuueahOeKtuaAgeagj+WSjOWwj+eoi+W6j+agh+mimOagj+OAglxyXG4gICAgICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSB0aW1lU2VsZWN0SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiBzY3JvbGxIZWlnaHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIOWcsOWMuumAieaLqeWZqFxyXG4gICAgYmluZFJlZ2lvbkNoYW5nZShldmVudDphbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdldmVudCcsZXZlbnQpO1xyXG4gICAgfSxcclxuICAgIC8vIOi/m+WFpeaLm+iBmOS8mlxyXG4gICAgdG9Nb3JlKGV2ZW50OmFueSl7XHJcbiAgICAgIGxldCBpbmZvID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZm87XHJcbiAgICAgIGNvbnN0IHNlbmREYXRhID0gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLnRpdGxlTWVldGluZ1tpbmZvXSk7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOidtZWV0aW5nTW9yZT9kYXRhPScrc2VuZERhdGFcclxuICAgICAgfSlcclxuICAgIH1cclxufSkiXX0=