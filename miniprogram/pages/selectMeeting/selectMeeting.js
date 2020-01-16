"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = require("../../services/request-service");
Page({
    data: {
        selectTypeSession: ''
    },
    onLoad: function () {
        const that = this;
        that.getAllSelectType();
    },
    onReady: function () {
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
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
    getAllSelectType() {
        const that = this;
        request_service_1.requestService.get('dualSelectType/', {})
            .then(res => {
            that.setData({
                selectTypeSession: res.data.data
            });
        });
    },
    toSelectMore(event) {
        const id = event.currentTarget.dataset.info;
        if (id > 1) {
            wx.navigateTo({
                url: 'meeting?id=' + id
            });
        }
        else {
            wx.navigateTo({
                url: 'meeting?id=' + id
            });
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0TWVldGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdE1lZXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvRUFBOEQ7QUFFOUQsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0EsaUJBQWlCLEVBQUMsRUFBRTtLQUN6QjtJQUtELE1BQU0sRUFBRTtRQUNKLE1BQU0sSUFBSSxHQUFHLElBQVcsQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtRQUNKLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLFFBQVEsRUFBRSxDQUFDO2FBQ2QsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFFQyxnQkFBZ0I7UUFDWixNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7UUFDekIsZ0NBQWMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUMsRUFBRSxDQUFDO2FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUEsRUFBRTtZQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsaUJBQWlCLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ2xDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ1IsQ0FBQztJQUNELFlBQVksQ0FBQyxLQUFTO1FBQ3BCLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMxQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDUixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNWLEdBQUcsRUFBQyxhQUFhLEdBQUMsRUFBRTthQUN2QixDQUFDLENBQUE7U0FDTDthQUFLO1lBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDVixHQUFHLEVBQUMsYUFBYSxHQUFDLEVBQUU7YUFDdkIsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWluaXByb2dyYW0vcGFnZXMvc2VsZWN0TWVldGluZy9zZWxlY3RNZWV0aW5nLmpzXHJcbmltcG9ydCB7cmVxdWVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9yZXF1ZXN0LXNlcnZpY2VcIjtcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICAgICAgc2VsZWN0VHlwZVNlc3Npb246JydcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBhbnk7XHJcbiAgICAgIHRoYXQuZ2V0QWxsU2VsZWN0VHlwZSgpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmXHJcbiAgICAgICAgICB0aGlzLmdldFRhYkJhcigpKSB7XHJcbiAgICAgICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiAxXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpOmFueSB7XHJcblxyXG4gIH0sXHJcbiAgICAvLyDojrflj5blhajpg6jlj4zpgInkvJrnmoTnsbvlnovjgIEgaWTigKbigKZcclxuICAgIGdldEFsbFNlbGVjdFR5cGUoKXtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBhbnk7XHJcbiAgICAgICAgcmVxdWVzdFNlcnZpY2UuZ2V0KCdkdWFsU2VsZWN0VHlwZS8nLHt9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0VHlwZVNlc3Npb246cmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHRvU2VsZWN0TW9yZShldmVudDphbnkpe1xyXG4gICAgICBjb25zdCBpZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmZvO1xyXG4gICAgICAgIGlmIChpZCA+IDEpIHtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6J21lZXRpbmc/aWQ9JytpZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6J21lZXRpbmc/aWQ9JytpZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pIl19