export const authenService = {
    saveToken(token: string) {
        wx.setStorageSync('token', token);
    },
    saveUserId(userId: string) {
        wx.setStorageSync('userId', userId);
    },

    getToken() {
        return wx.getStorageSync('token');
    },
    getUserId() {
        return wx.getStorageSync('userId');
    },

    clearToken() {
        wx.setStorageSync('token', '');
    }
};