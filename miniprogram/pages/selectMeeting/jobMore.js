"use strict";
Page({
    data: {
        jobMoreData: '',
        jobMoreTotal: '',
        isCollected: false,
    },
    onLoad: function (option) {
        this.setData({
            jobMoreData: JSON.parse(option.data),
            jobMoreTotal: JSON.parse(option.totalData)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9iTW9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpvYk1vcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNGLFdBQVcsRUFBQyxFQUFFO1FBQ2QsWUFBWSxFQUFDLEVBQUU7UUFDZixXQUFXLEVBQUMsS0FBSztLQUVwQjtJQUtELE1BQU0sRUFBRSxVQUFVLE1BQVU7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFdBQVcsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDbkMsWUFBWSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztTQUM1QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUVDLFlBQVk7UUFDUixNQUFNLElBQUksR0FBRyxJQUFXLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFdBQVcsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNyQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWluaXByb2dyYW0vcGFnZXMvc2VsZWN0TWVldGluZy9qb2JNb3JlLmpzXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICAgIGpvYk1vcmVEYXRhOicnLFxyXG4gICAgICBqb2JNb3JlVG90YWw6JycsXHJcbiAgICAgIGlzQ29sbGVjdGVkOmZhbHNlLFxyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbjphbnkpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGpvYk1vcmVEYXRhOkpTT04ucGFyc2Uob3B0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgam9iTW9yZVRvdGFsOkpTT04ucGFyc2Uob3B0aW9uLnRvdGFsRGF0YSlcclxuICAgICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKTphbnkge1xyXG5cclxuICB9LFxyXG4gICAgLy8g54K55Ye75pS26JePXHJcbiAgICBjbGlja0NvbGxlY3QoKXtcclxuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcyBhcyBhbnk7XHJcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgICAgaXNDb2xsZWN0ZWQ6IXRoYXQuZGF0YS5pc0NvbGxlY3RlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSkiXX0=