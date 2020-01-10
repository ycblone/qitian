"use strict";
Page({
    data: {
        scrollHeight: ''
    },
    onLoad: function (option) {
        console.log('option', option.title);
        if (option.title == '0') {
            wx.setNavigationBarTitle({
                title: '专题双选会'
            });
        }
        else {
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lZXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNGLFlBQVksRUFBQyxFQUFFO0tBQ2xCO0lBS0QsTUFBTSxFQUFFLFVBQVUsTUFBVTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNyQixFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JCLEtBQUssRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUNOO2FBQUs7WUFDRixFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JCLEtBQUssRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUNOO0lBR0wsQ0FBQztJQUtELE9BQU8sRUFBRTtRQUNMLE1BQU0sSUFBSSxHQUFHLElBQVcsQ0FBQztRQUN6QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBQ0MsdUJBQXVCO1FBQ25CLE1BQU0sSUFBSSxHQUFHLElBQVcsQ0FBQztRQUV6QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUVyQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNiLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUVyQyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkQsSUFBSSxZQUFZLEdBQUcsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsWUFBWSxFQUFFLFlBQVk7YUFDN0IsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWluaXByb2dyYW0vcGFnZXMvc2VsZWN0TWVldGluZy9tZWV0aW5nLmpzXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICAgIHNjcm9sbEhlaWdodDonJ1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uOmFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnb3B0aW9uJyxvcHRpb24udGl0bGUpO1xyXG4gICAgICBpZiAob3B0aW9uLnRpdGxlID09ICcwJykge1xyXG4gICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+S4k+mimOWPjOmAieS8midcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5Yy65Z+f5oub6IGY5LyaJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBhbnk7XHJcbiAgICAgIHRoYXQuY29tcHV0ZVNjcm9sbFZpZXdIZWlnaHQoKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCk6YW55IHtcclxuXHJcbiAgfSxcclxuICAgIGNvbXB1dGVTY3JvbGxWaWV3SGVpZ2h0KCkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIGFueTtcclxuICAgICAgICAvLyDov5Tlm57kuIDkuKogU2VsZWN0b3JRdWVyeSDlr7nosaHlrp7kvotcclxuICAgICAgICBsZXQgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XHJcbiAgICAgICAgLy8g5Zyo5b2T5YmN6aG16Z2i5LiL6YCJ5oup56ys5LiA5Liq5Yy56YWN6YCJ5oup5ZmoIHNlbGVjdG9yIOeahOiKgueCueOAgui/lOWbnuS4gOS4qiBOb2Rlc1JlZiDlr7nosaHlrp7kvovvvIzlj6/ku6XnlKjkuo7ojrflj5boioLngrnkv6Hmga9cclxuICAgICAgICBxdWVyeS5zZWxlY3QoJy50aW1lQm94JykuYm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgLy8g5omn6KGM5omA5pyJ55qE6K+35rGC44CC6K+35rGC57uT5p6c5oyJ6K+35rGC5qyh5bqP5p6E5oiQ5pWw57uE77yM5ZyoY2FsbGJhY2vnmoTnrKzkuIDkuKrlj4LmlbDkuK3ov5Tlm55cclxuICAgICAgICBxdWVyeS5leGVjKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lU2VsZWN0SGVpZ2h0ID0gcmVzWzBdLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKSDlj6/ku6XlvpfliLDorr7lpIfnmoTlkITnp43kv6Hmga/vvIzlhbPkuo7pq5jluqbnmoTlj4LmlbDmnInkuKTkuKrvvIzkuIDkuKrmmK/lsY/luZXpq5jluqYgc2NyZWVuSGVpZ2h077yM5LiA5Liq5piv5Y+v5L2/55So56qX5Y+j6auY5bqmIHdpbmRvd0hlaWdodOOAguazqOaEj+iuoeeul+eahOaXtuWAmeimgeeUqCB3aW5kb3dIZWlnaHTvvIzov5nmoLfnrpflh7rmnaXnmoTpq5jluqbmiY3mmK/lr7nnmoTjgIJzY3JlZW5IZWlnaHTmmK/miYvmnLrnmoTlsY/luZXpq5jluqbvvIzljIXlkKvkuobmiYvmnLrnmoTnirbmgIHmoI/lkozlsI/nqIvluo/moIfpopjmoI/jgIJcclxuICAgICAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gdGltZVNlbGVjdEhlaWdodDtcclxuICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodDogc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSkiXX0=