export const authenService = {
    saveToken(token: string) {
        wx.setStorageSync('token', token);
    },
    saveUserId(userId: string) {
        wx.setStorageSync('userId', userId);
    },
    saveUserInfo(userInfo: object) {
        wx.setStorageSync('userInfo', userInfo);
    },

    getToken() {
        return wx.getStorageSync('token');
    },
    getUserId() {
        return wx.getStorageSync('userId');
    },
    getUserInfo() {
        return wx.getStorageSync('userInfo');
    },

    clearToken() {
        wx.setStorageSync('token', '');
    }
};