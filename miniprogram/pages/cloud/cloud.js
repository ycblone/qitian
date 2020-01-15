"use strict";
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
    onShareAppMessage: function () {
    },
    clickCollect() {
        const that = this;
        that.setData({
            isCollected: !that.data.isCollected
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBQyxFQUFFO1FBQ1osV0FBVyxFQUFDLEtBQUs7S0FDcEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxNQUFVO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxTQUFTLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBRUMsWUFBWTtRQUNaLE1BQU0sSUFBSSxHQUFHLElBQVcsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsV0FBVyxFQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1NBQ3JDLENBQUMsQ0FBQztJQUNILENBQUM7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9jbG91ZC9jbG91ZC5qc1xyXG5QYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgICB2aWRlb1VybDogJycsXHJcbiAgICAgIGhhc1ZpZGVvOiBmYWxzZSxcclxuICAgICAgY2xvdWREYXRhOicnLFxyXG4gICAgICBpc0NvbGxlY3RlZDpmYWxzZVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uOmFueSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY2xvdWREYXRhOkpTT04ucGFyc2Uob3B0aW9uLmRhdGEpXHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCk6YW55IHtcclxuXHJcbiAgfSxcclxuICAgIC8vIOeCueWHu+aUtuiXj1xyXG4gICAgY2xpY2tDb2xsZWN0KCl7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBhbnk7XHJcbiAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgIGlzQ29sbGVjdGVkOiF0aGF0LmRhdGEuaXNDb2xsZWN0ZWRcclxuICAgIH0pO1xyXG4gICAgfSxcclxufSkiXX0=