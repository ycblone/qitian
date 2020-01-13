"use strict";
Page({
    data: {
        scrollHeight: '',
    },
    onLoad: function () {
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
    toPractice() {
        wx.navigateTo({
            url: 'practiceMore'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZEpvYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbmRKb2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNGLFlBQVksRUFBQyxFQUFFO0tBRWxCO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE9BQU8sRUFBRTtRQUNMLE1BQU0sSUFBSSxHQUFHLElBQVcsQ0FBQztRQUN6QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBS0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVTtZQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDckIsUUFBUSxFQUFFLENBQUM7YUFDZCxDQUFDLENBQUE7U0FDTDtJQUNMLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUVDLHVCQUF1QjtRQUNuQixNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7UUFFekIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUVqRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNsQyxJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFFckMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsWUFBWSxDQUFDO1lBRXZELElBQUksWUFBWSxHQUFHLFlBQVksR0FBRyxhQUFhLEdBQUcsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsWUFBWSxFQUFFLFlBQVk7YUFDN0IsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUMsY0FBYztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWluaXByb2dyYW0vcGFnZXMvZmluZEpvYi9maW5kSm9iLmpzXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICAgIHNjcm9sbEhlaWdodDonJyxcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIGFueTtcclxuICAgICAgdGhhdC5jb21wdXRlU2Nyb2xsVmlld0hlaWdodCgpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiZcclxuICAgICAgICAgIHRoaXMuZ2V0VGFiQmFyKCkpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IDJcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCk6YW55IHtcclxuXHJcbiAgfSxcclxuICAgIC8vIOiOt+WPluWJqeS4i+mrmOW6pue7mXNjcm9sbHZpZXfnlKhcclxuICAgIGNvbXB1dGVTY3JvbGxWaWV3SGVpZ2h0KCkge1xyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzIGFzIGFueTtcclxuICAgICAgICAvLyDov5Tlm57kuIDkuKogU2VsZWN0b3JRdWVyeSDlr7nosaHlrp7kvotcclxuICAgICAgICBsZXQgcXVlcnkgPSB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCk7XHJcbiAgICAgICAgLy8g5Zyo5b2T5YmN6aG16Z2i5LiL6YCJ5oup56ys5LiA5Liq5Yy56YWN6YCJ5oup5ZmoIHNlbGVjdG9yIOeahOiKgueCueOAgui/lOWbnuS4gOS4qiBOb2Rlc1JlZiDlr7nosaHlrp7kvovvvIzlj6/ku6XnlKjkuo7ojrflj5boioLngrnkv6Hmga9cclxuICAgICAgICBxdWVyeS5zZWxlY3QoJy5oZWFkVG9wJykuYm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcXVlcnkuc2VsZWN0KCcuaGVhZEJvdHRvbScpLmJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIC8vIOaJp+ihjOaJgOacieeahOivt+axguOAguivt+axgue7k+aenOaMieivt+axguasoeW6j+aehOaIkOaVsOe7hO+8jOWcqGNhbGxiYWNr55qE56ys5LiA5Liq5Y+C5pWw5Lit6L+U5ZueXHJcbiAgICAgICAgcXVlcnkuZXhlYyhyZXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaGVhZFRvcEhlaWdodCA9IHJlc1swXS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBoZWFkQm90dG9tSGVpZ2h0ID0gcmVzWzFdLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKSDlj6/ku6XlvpfliLDorr7lpIfnmoTlkITnp43kv6Hmga/vvIzlhbPkuo7pq5jluqbnmoTlj4LmlbDmnInkuKTkuKrvvIzkuIDkuKrmmK/lsY/luZXpq5jluqYgc2NyZWVuSGVpZ2h077yM5LiA5Liq5piv5Y+v5L2/55So56qX5Y+j6auY5bqmIHdpbmRvd0hlaWdodOOAguazqOaEj+iuoeeul+eahOaXtuWAmeimgeeUqCB3aW5kb3dIZWlnaHTvvIzov5nmoLfnrpflh7rmnaXnmoTpq5jluqbmiY3mmK/lr7nnmoTjgIJzY3JlZW5IZWlnaHTmmK/miYvmnLrnmoTlsY/luZXpq5jluqbvvIzljIXlkKvkuobmiYvmnLrnmoTnirbmgIHmoI/lkozlsI/nqIvluo/moIfpopjmoI/jgIJcclxuICAgICAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyA1MOaYr3RhYumrmOW6plxyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gaGVhZFRvcEhlaWdodCAtIGhlYWRCb3R0b21IZWlnaHQgLSA1MDtcclxuICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEhlaWdodDogc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgdG9QcmFjdGljZSgpe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDoncHJhY3RpY2VNb3JlJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG59KSJdfQ==