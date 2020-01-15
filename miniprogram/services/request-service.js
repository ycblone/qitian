"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const authen_service_1 = require("./authen-service");
let host = '';
const regeneratorRuntime = require('../utils/runtime.js');
let syncNum = 0;
let syncShowLoadingNum = 0;
function sleep() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => setTimeout(resolve, 100));
    });
}
exports.requestService = {
    setHost(_h) {
        host = _h;
    },
    get(url, data, header = {}, showLoading = true, isUrl = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (showLoading) {
                if (syncShowLoadingNum === 0) {
                    wx.showLoading({
                        title: '加载中…',
                        mask: true
                    });
                }
                syncShowLoadingNum++;
            }
            syncNum++;
            while (syncNum > 10) {
                yield sleep();
            }
            return new Promise((resolve, reject) => {
                if (isUrl) {
                    wx.request({
                        url: `${host}/${url}/${data.business.replace("\"", "")}`,
                        method: 'GET',
                        header: Object.assign({}, header, { token: authen_service_1.authenService.getToken() }),
                        success(res) {
                            if (showLoading) {
                                syncShowLoadingNum--;
                                if (syncShowLoadingNum === 0) {
                                    wx.hideLoading({});
                                }
                            }
                            syncNum--;
                            if (res.data.code == 401) {
                                wx.clearStorageSync();
                                wx.redirectTo({
                                    url: '/pages/login/login',
                                });
                                return;
                            }
                            if (res.data.code !== 200) {
                                reject(new Error(res.msg));
                            }
                            else {
                                resolve(res);
                            }
                        },
                        fail(err) {
                            if (showLoading) {
                                syncShowLoadingNum--;
                                if (syncShowLoadingNum === 0) {
                                    wx.hideLoading({});
                                }
                            }
                            syncNum--;
                            reject(new Error(err.errMsg));
                        }
                    });
                }
                else {
                    wx.request({
                        url: `${host}/${url}`,
                        method: 'GET',
                        header: Object.assign({}, header, { token: authen_service_1.authenService.getToken() }),
                        data,
                        success(res) {
                            if (showLoading) {
                                syncShowLoadingNum--;
                                if (syncShowLoadingNum === 0) {
                                    wx.hideLoading({});
                                }
                            }
                            syncNum--;
                            if (res.data.code == 401) {
                                wx.clearStorageSync();
                                wx.redirectTo({
                                    url: '/pages/login/login',
                                });
                                return;
                            }
                            if (res.data.code !== 200) {
                                reject(new Error(res.msg));
                            }
                            else {
                                resolve(res);
                            }
                        },
                        fail(err) {
                            if (showLoading) {
                                syncShowLoadingNum--;
                                if (syncShowLoadingNum === 0) {
                                    wx.hideLoading({});
                                }
                            }
                            syncNum--;
                            reject(new Error(err.errMsg));
                        }
                    });
                }
            });
        });
    },
    splitStr(url, splitChar, splitStrOne = "_thumb_800X500") {
        var app = getApp();
        var pathArr = url.split(splitChar);
        var pathArrLeft = pathArr[0] + splitStrOne;
        let pathArrLeftAdd = app.globalData.host + "/thumbnail" + pathArrLeft + splitChar + pathArr[1];
        console.log("拼接后的链接", pathArrLeftAdd);
        return pathArrLeftAdd;
    },
    post(url, data, header = { 'content-type': 'application/json' }, showLoading = true, isLogin = false) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('0', 'syncNum: ', syncNum, 'syncShowLoadingNum: ', syncShowLoadingNum);
            if (showLoading) {
                if (syncShowLoadingNum === 0) {
                    wx.showLoading({
                        title: '加载中…',
                        mask: true,
                    });
                }
                syncShowLoadingNum++;
            }
            syncNum++;
            while (syncNum > 10) {
                yield sleep();
            }
            return new Promise((resolve, reject) => {
                wx.request({
                    url: `${host}/${url}`,
                    method: 'POST',
                    header: Object.assign({}, header, { token: authen_service_1.authenService.getToken() }),
                    data,
                    success(res) {
                        if (showLoading) {
                            syncShowLoadingNum--;
                            if (syncShowLoadingNum === 0) {
                                wx.hideLoading({});
                            }
                        }
                        syncNum--;
                        if (res.data.code == 401) {
                            wx.clearStorageSync();
                            if (!isLogin) {
                                wx.redirectTo({
                                    url: '/pages/login/login',
                                });
                                return;
                            }
                        }
                        ;
                        if (res.data.code !== 200) {
                            if (!isLogin) {
                                wx.showToast({
                                    title: res.data.msg,
                                    icon: 'none'
                                });
                            }
                            reject(new Error(res.data.msg));
                        }
                        else {
                            resolve(res);
                        }
                    },
                    fail(err) {
                        if (showLoading) {
                            syncShowLoadingNum--;
                            if (syncShowLoadingNum === 0) {
                                wx.hideLoading({});
                            }
                        }
                        syncNum--;
                        reject(new Error(err.errMsg));
                    }
                });
            });
        });
    },
    put(url, data, header = {}, showLoading = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (showLoading) {
                if (syncShowLoadingNum === 0) {
                    wx.showLoading({
                        title: '加载中…',
                        mask: true
                    });
                }
                syncShowLoadingNum++;
            }
            syncNum++;
            while (syncNum > 10) {
                yield sleep();
            }
            return new Promise((resolve, reject) => {
                wx.request({
                    url: `${host}/${url}`,
                    method: 'PUT',
                    header: Object.assign({}, header, { token: authen_service_1.authenService.getToken() }),
                    data,
                    success(res) {
                        if (showLoading) {
                            syncShowLoadingNum--;
                            if (syncShowLoadingNum === 0) {
                                wx.hideLoading({});
                            }
                        }
                        syncNum--;
                        if (res.data.code == 401) {
                            wx.clearStorageSync();
                            wx.redirectTo({
                                url: '/pages/login/login',
                            });
                            return;
                        }
                        ;
                        if (res.data && res.data.errorCode !== '0') {
                            reject(new Error(res.data.errorMsg));
                        }
                        else {
                            resolve(res);
                        }
                    },
                    fail(err) {
                        if (showLoading) {
                            syncShowLoadingNum--;
                            if (syncShowLoadingNum === 0) {
                                wx.hideLoading({});
                            }
                        }
                        syncNum--;
                        reject(new Error(err.errMsg));
                    }
                });
            });
        });
    },
    delete(url, data, header = {}, showLoading = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (showLoading) {
                if (syncShowLoadingNum === 0) {
                    wx.showLoading({
                        title: '加载中…',
                        mask: true
                    });
                }
                syncShowLoadingNum++;
            }
            syncNum++;
            while (syncNum > 10) {
                yield sleep();
            }
            return new Promise((resolve, reject) => {
                wx.request({
                    url: `${host}/${url}`,
                    method: 'DELETE',
                    header: Object.assign({}, header, { token: authen_service_1.authenService.getToken() }),
                    data,
                    success(res) {
                        if (showLoading) {
                            syncShowLoadingNum--;
                            if (syncShowLoadingNum === 0) {
                                wx.hideLoading({});
                            }
                        }
                        syncNum--;
                        if (res.statusCode == 401) {
                            wx.clearStorageSync();
                            wx.redirectTo({
                                url: '/pages/login/login',
                            });
                            return;
                        }
                        ;
                        if (res.data && res.data.errorCode !== '0') {
                            reject(new Error(res.data.errorMsg));
                        }
                        else {
                            resolve(res);
                        }
                    },
                    fail(err) {
                        if (showLoading) {
                            syncShowLoadingNum--;
                            if (syncShowLoadingNum === 0) {
                                wx.hideLoading({});
                            }
                        }
                        syncNum--;
                        reject(new Error(err.errMsg));
                    }
                });
            });
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxREFBaUQ7QUFHakQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUUxRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFaEIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFM0IsU0FBZSxLQUFLOztRQUNsQixNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFHO0lBQzVCLE9BQU8sQ0FBQyxFQUFVO1FBQ2hCLElBQUksR0FBRyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUssR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFDLEtBQUssR0FBRyxLQUFLOztZQUNoRixJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLGtCQUFrQixLQUFLLENBQUMsRUFBRTtvQkFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixLQUFLLEVBQUUsTUFBTTt3QkFDYixJQUFJLEVBQUUsSUFBSTtxQkFDWCxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0Qsa0JBQWtCLEVBQUUsQ0FBQzthQUN0QjtZQUNELE9BQU8sRUFBRSxDQUFDO1lBRVYsT0FBTyxPQUFPLEdBQUcsRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssRUFBRSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLElBQUksT0FBTyxDQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUUxQyxJQUFJLEtBQUssRUFBRTtv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QUFnQixFQUFFLENBQUM7NEJBQ3RCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0NBQ1osR0FBRyxFQUFFLG9CQUFvQjs2QkFDMUIsQ0FBQyxDQUFDOzRCQUNILE9BQU87eUJBQ1I7d0JBQUEsQ0FBQzt3QkFDRixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssR0FBRyxFQUFFOzRCQUMxQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3lCQUN0Qzs2QkFBTTs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2Q7b0JBQ0gsQ0FBQztvQkFDRCxJQUFJLENBQUMsR0FBRzt3QkFDTixJQUFJLFdBQVcsRUFBRTs0QkFDZixrQkFBa0IsRUFBRSxDQUFDOzRCQUNyQixJQUFJLGtCQUFrQixLQUFLLENBQUMsRUFBRTtnQ0FDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDcEI7eUJBQ0Y7d0JBQ0QsT0FBTyxFQUFFLENBQUM7d0JBQ1YsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhlblNlcnZpY2UgfSBmcm9tICcuL2F1dGhlbi1zZXJ2aWNlJztcclxuLy8gdmFyIGFwcDphbnkgPSBnZXRBcHA8YW55PigpO1xyXG4vLyDlsI/nqIvluo9lczbovaxlczXlkI7kuI3lhbzlrrlhc3luY+ivreazle+8jG5wbeW8leWFpeesrOS4ieaWueWMhe+8jOWwhnJ1bnRpbWUuanPlpI3liLbliLDpobnnm67nm67lvZXkuIvvvIzlnKjpnIDopoHnmoTlnLDmlrlyZXF1aXJl5byV5YWl5Y2z5Y+vXHJcbmxldCBob3N0ID0gJyc7XHJcbmNvbnN0IHJlZ2VuZXJhdG9yUnVudGltZSA9IHJlcXVpcmUoJy4uL3V0aWxzL3J1bnRpbWUuanMnKTtcclxuXHJcbmxldCBzeW5jTnVtID0gMDtcclxuXHJcbmxldCBzeW5jU2hvd0xvYWRpbmdOdW0gPSAwO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2xlZXAoKSB7XHJcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFNlcnZpY2UgPSB7XHJcbiAgc2V0SG9zdChfaDogc3RyaW5nKSB7XHJcbiAgICBob3N0ID0gX2g7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgZ2V0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QsIGhlYWRlciA9IHt9LCBzaG93TG9hZGluZyA9IHRydWUsaXNVcmwgPSBmYWxzZSkge1xyXG4gICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4reKApicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3luY1Nob3dMb2FkaW5nTnVtKys7XHJcbiAgICB9XHJcbiAgICBzeW5jTnVtKys7XHJcblxyXG4gICAgd2hpbGUgKHN5bmNOdW0gPiAxMCkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAvLyDmjInooYzkuJrmn6Xor6LmjqXlj6PmmK/miorlj4LmlbDmi7zlnKh1cmzlkI7pnaLnmoTvvIzmiYDku6Xov5nph4zliKTmlq3kuIDkuItcclxuICAgICAgaWYgKGlzVXJsKSB7XHJcbiAgICAgICAgLy8g5a+56LGh5a2X56ym5Liy6L2s5o2iXHJcbiAgICAgICAgLy8gICBsZXQgc2VuZERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhLmJ1c2luZXNzLnJlcGxhY2UoXCJcXFwiXCIsXCJcIikpO1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3NlbmREYXRhJyxzZW5kRGF0YSk7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnZGF0YScsZGF0YSk7XHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6IGAke2hvc3R9LyR7dXJsfS8ke2RhdGEuYnVzaW5lc3MucmVwbGFjZShcIlxcXCJcIixcIlwiKX1gLC8q5Y675byV5Y+3Ki9cclxuICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcjogeyAuLi5oZWFkZXIsIC4uLnsgdG9rZW46IGF1dGhlblNlcnZpY2UuZ2V0VG9rZW4oKSB9IH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVzLm1zZykpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyLmVyck1zZykpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDogYCR7aG9zdH0vJHt1cmx9YCxcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcjogeyAuLi5oZWFkZXIsIC4uLnsgdG9rZW46IGF1dGhlblNlcnZpY2UuZ2V0VG9rZW4oKSB9IH0sXHJcbiAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXMubXNnKSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIuZXJyTXNnKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy8g5ou85o6l5Zu+54mH6Lev5b6E5a2X56ym5Liy5LiT55So5Ye95pWwXHJcbiAgc3BsaXRTdHIodXJsOiBzdHJpbmcsIHNwbGl0Q2hhcjogc3RyaW5nLCBzcGxpdFN0ck9uZSA9IFwiX3RodW1iXzgwMFg1MDBcIikge1xyXG4gICAgdmFyIGFwcDogYW55ID0gZ2V0QXBwPGFueT4oKTtcclxuICAgIHZhciBwYXRoQXJyID0gdXJsLnNwbGl0KHNwbGl0Q2hhcik7XHJcbiAgICB2YXIgcGF0aEFyckxlZnQgPSBwYXRoQXJyWzBdICsgc3BsaXRTdHJPbmU7XHJcbiAgICBsZXQgcGF0aEFyckxlZnRBZGQ6IGFueSA9IGFwcC5nbG9iYWxEYXRhLmhvc3QgKyBcIi90aHVtYm5haWxcIiArIHBhdGhBcnJMZWZ0ICsgc3BsaXRDaGFyICsgcGF0aEFyclsxXTtcclxuICAgIGNvbnNvbGUubG9nKFwi5ou85o6l5ZCO55qE6ZO+5o6lXCIsIHBhdGhBcnJMZWZ0QWRkKTtcclxuICAgIHJldHVybiBwYXRoQXJyTGVmdEFkZDtcclxuICB9LFxyXG4gIGFzeW5jIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCwgaGVhZGVyID0geyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIHNob3dMb2FkaW5nID0gdHJ1ZSxpc0xvZ2luPWZhbHNlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnMCcsICdzeW5jTnVtOiAnLCBzeW5jTnVtLCAnc3luY1Nob3dMb2FkaW5nTnVtOiAnLCBzeW5jU2hvd0xvYWRpbmdOdW0pXHJcbiAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295Lit4oCmJyxcclxuICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3luY1Nob3dMb2FkaW5nTnVtKys7XHJcbiAgICB9XHJcbiAgICBzeW5jTnVtKys7XHJcblxyXG4gICAgd2hpbGUgKHN5bmNOdW0gPiAxMCkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGAke2hvc3R9LyR7dXJsfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7IC4uLmhlYWRlciwgLi4ueyB0b2tlbjogYXV0aGVuU2VydmljZS5nZXRUb2tlbigpIH0gfSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgICAgLy8g5piv5ZCm5piv55m75b2V55WM6Z2i5Y+R6LW355qE6Ym05p2D5pON5L2cXHJcbiAgICAgICAgICAgICAgaWYgKCFpc0xvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOaYr2xvZ2lu6Ym05p2D55qE6K+d5LiN6KaB5pi+56S64oCc5rKh5pyJ55m75b2V4oCd55qE5a2X5qC3XHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbikge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXMuZGF0YS5tc2cpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyLmVyck1zZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIHB1dCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0LCBoZWFkZXIgPSB7fSwgc2hvd0xvYWRpbmcgPSB0cnVlKSB7XHJcbiAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295Lit4oCmJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzeW5jU2hvd0xvYWRpbmdOdW0rKztcclxuICAgIH1cclxuICAgIHN5bmNOdW0rKztcclxuXHJcbiAgICB3aGlsZSAoc3luY051bSA+IDEwKSB7XHJcbiAgICAgIGF3YWl0IHNsZWVwKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYCR7aG9zdH0vJHt1cmx9YCxcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcjogeyAuLi5oZWFkZXIsIC4uLnsgdG9rZW46IGF1dGhlblNlcnZpY2UuZ2V0VG9rZW4oKSB9IH0sXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDQwMSkge1xyXG4gICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbi9sb2dpbicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmVycm9yQ29kZSAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVzLmRhdGEuZXJyb3JNc2cpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyLmVyck1zZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGRlbGV0ZSh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0LCBoZWFkZXIgPSB7fSwgc2hvd0xvYWRpbmcgPSB0cnVlKSB7XHJcbiAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295Lit4oCmJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzeW5jU2hvd0xvYWRpbmdOdW0rKztcclxuICAgIH1cclxuICAgIHN5bmNOdW0rKztcclxuXHJcbiAgICB3aGlsZSAoc3luY051bSA+IDEwKSB7XHJcbiAgICAgIGF3YWl0IHNsZWVwKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYCR7aG9zdH0vJHt1cmx9YCxcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcjogeyAuLi5oZWFkZXIsIC4uLnsgdG9rZW46IGF1dGhlblNlcnZpY2UuZ2V0VG9rZW4oKSB9IH0sXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSA0MDEpIHtcclxuICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpO1xyXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5lcnJvckNvZGUgIT09ICcwJykge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcy5kYXRhLmVycm9yTXNnKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5lcnJNc2cpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdfQ==