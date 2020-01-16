"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = require("../../services/request-service");
Page({
    data: {
        id: '',
        companyData: '',
    },
    onLoad: function (option) {
        const that = this;
        that.setData({
            id: option.id
        });
        that.getCompany();
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
    onShareAppMessage: function () {
    },
    getCompany() {
        const that = this;
        const business = that.data.id;
        request_service_1.requestService.get('dualSelect/companies/', { business }, {}, true, true)
            .then(res => {
            that.setData({
                companyData: res.data.data
            });
        });
    },
    toCompany(event) {
        const that = this;
        let info = event.currentTarget.dataset.info;
        const sendData = JSON.stringify(that.data.companyData[info]);
        wx.navigateTo({
            url: 'companyMore?data=' + sendData
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZ1BsYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVldGluZ1BsYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0VBQThEO0FBRTlELElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNGLEVBQUUsRUFBQyxFQUFFO1FBQ0wsV0FBVyxFQUFDLEVBQUU7S0FDakI7SUFLRCxNQUFNLEVBQUUsVUFBVSxNQUFVO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQVcsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsRUFBRSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBRUMsVUFBVTtRQUNOLE1BQU0sSUFBSSxHQUFHLElBQVcsQ0FBQztRQUN6QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM5QixnQ0FBYyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDO2FBQzlELElBQUksQ0FBQyxHQUFHLENBQUEsRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsV0FBVyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTthQUM1QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBUztRQUNmLE1BQU0sSUFBSSxHQUFHLElBQVcsQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdELEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUMsbUJBQW1CLEdBQUMsUUFBUTtTQUNuQyxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWluaXByb2dyYW0vcGFnZXMvc2VsZWN0TWVldGluZy9tZWV0aW5nUGxhY2UuanNcclxuaW1wb3J0IHtyZXF1ZXN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3JlcXVlc3Qtc2VydmljZVwiO1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgICAgaWQ6JycsXHJcbiAgICAgIGNvbXBhbnlEYXRhOicnLFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uOmFueSkge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBhbnk7XHJcbiAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpZDpvcHRpb24uaWRcclxuICAgICAgfSk7XHJcbiAgICAgIHRoYXQuZ2V0Q29tcGFueSgpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCk6YW55IHtcclxuXHJcbiAgfSxcclxuICAgIC8vIOiOt+WPluW9k+WJjeS8muWcuueahOWFrOWPuFxyXG4gICAgZ2V0Q29tcGFueSgpe1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIGFueTtcclxuICAgICAgICBjb25zdCBidXNpbmVzcyA9IHRoYXQuZGF0YS5pZDtcclxuICAgICAgICByZXF1ZXN0U2VydmljZS5nZXQoJ2R1YWxTZWxlY3QvY29tcGFuaWVzLycse2J1c2luZXNzfSx7fSx0cnVlLHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgIGNvbXBhbnlEYXRhOnJlcy5kYXRhLmRhdGFcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyDov5vlhaXlhazlj7jor6bmg4VcclxuICAgIHRvQ29tcGFueShldmVudDphbnkpe1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIGFueTtcclxuICAgICAgICBsZXQgaW5mbyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmZvO1xyXG4gICAgICAgIGNvbnN0IHNlbmREYXRhID0gSlNPTi5zdHJpbmdpZnkodGhhdC5kYXRhLmNvbXBhbnlEYXRhW2luZm9dKTtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgdXJsOidjb21wYW55TW9yZT9kYXRhPScrc2VuZERhdGFcclxuICAgICB9KVxyXG4gICAgfVxyXG59KSJdfQ==