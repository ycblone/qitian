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
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLFNBQVMsRUFBQyxFQUFFO1FBQ1osV0FBVyxFQUFDLEtBQUs7S0FDcEI7SUFLRCxNQUFNLEVBQUUsVUFBVSxNQUFVO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxTQUFTLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRSxVQUFVLEdBQUc7UUFDNUIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUMxQjtRQUNELE9BQU87WUFDSCxLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsZUFBZTtTQUN4QixDQUFBO0lBQ0wsQ0FBQztJQUVDLFlBQVk7UUFDWixNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFdBQVcsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNyQyxDQUFDLENBQUM7SUFDSCxDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWluaXByb2dyYW0vcGFnZXMvY2xvdWQvY2xvdWQuanNcclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgICAgdmlkZW9Vcmw6ICcnLFxyXG4gICAgICBoYXNWaWRlbzogZmFsc2UsXHJcbiAgICAgIGNsb3VkRGF0YTonJyxcclxuICAgICAgaXNDb2xsZWN0ZWQ6ZmFsc2VcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbjphbnkpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGNsb3VkRGF0YTpKU09OLnBhcnNlKG9wdGlvbi5kYXRhKVxyXG4gICAgICB9KTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aXRsZTogJ+iHquWumuS5iei9rOWPkeagh+mimCcsXHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2Nsb3VkPydcclxuICAgICAgfVxyXG4gIH0sXHJcbiAgICAvLyDngrnlh7vmlLbol49cclxuICAgIGNsaWNrQ29sbGVjdCgpe1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXMgYXMgYW55O1xyXG4gICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICBpc0NvbGxlY3RlZDohdGhhdC5kYXRhLmlzQ29sbGVjdGVkXHJcbiAgICB9KTtcclxuICAgIH0sXHJcbn0pIl19