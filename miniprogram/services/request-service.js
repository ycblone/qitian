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
                        header: Object.assign({}, header),
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
                        header: Object.assign({}, header),
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
                    header: Object.assign({}, header),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxREFBaUQ7QUFHakQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUUxRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFaEIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFM0IsU0FBZSxLQUFLOztRQUNsQixNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFHO0lBQzVCLE9BQU8sQ0FBQyxFQUFVO1FBQ2hCLElBQUksR0FBRyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUssR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFDLEtBQUssR0FBRyxLQUFLOztZQUNoRixJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLGtCQUFrQixLQUFLLENBQUMsRUFBRTtvQkFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixLQUFLLEVBQUUsTUFBTTt3QkFDYixJQUFJLEVBQUUsSUFBSTtxQkFDWCxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0Qsa0JBQWtCLEVBQUUsQ0FBQzthQUN0QjtZQUNELE9BQU8sRUFBRSxDQUFDO1lBRVYsT0FBTyxPQUFPLEdBQUcsRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssRUFBRSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLElBQUksT0FBTyxDQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUUxQyxJQUFJLEtBQUssRUFBRTtv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QUksR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssR0FBRyxFQUFFOzRCQUMxQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3lCQUN0Qzs2QkFBTTs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2Q7b0JBQ0gsQ0FBQztvQkFDRCxJQUFJLENBQUMsR0FBRzt3QkFDTixJQUFJLFdBQVcsRUFBRTs0QkFDZixrQkFBa0IsRUFBRSxDQUFDOzRCQUNyQixJQUFJLGtCQUFrQixLQUFLLENBQUMsRUFBRTtnQ0FDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDcEI7eUJBQ0Y7d0JBQ0QsT0FBTyxFQUFFLENBQUM7d0JBQ1YsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxDQUFDO2lCQUNGLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhlblNlcnZpY2UgfSBmcm9tICcuL2F1dGhlbi1zZXJ2aWNlJztcclxuLy8gdmFyIGFwcDphbnkgPSBnZXRBcHA8YW55PigpO1xyXG4vLyDlsI/nqIvluo9lczbovaxlczXlkI7kuI3lhbzlrrlhc3luY+ivreazle+8jG5wbeW8leWFpeesrOS4ieaWueWMhe+8jOWwhnJ1bnRpbWUuanPlpI3liLbliLDpobnnm67nm67lvZXkuIvvvIzlnKjpnIDopoHnmoTlnLDmlrlyZXF1aXJl5byV5YWl5Y2z5Y+vXHJcbmxldCBob3N0ID0gJyc7XHJcbmNvbnN0IHJlZ2VuZXJhdG9yUnVudGltZSA9IHJlcXVpcmUoJy4uL3V0aWxzL3J1bnRpbWUuanMnKTtcclxuXHJcbmxldCBzeW5jTnVtID0gMDtcclxuXHJcbmxldCBzeW5jU2hvd0xvYWRpbmdOdW0gPSAwO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2xlZXAoKSB7XHJcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFNlcnZpY2UgPSB7XHJcbiAgc2V0SG9zdChfaDogc3RyaW5nKSB7XHJcbiAgICBob3N0ID0gX2g7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgZ2V0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QsIGhlYWRlciA9IHt9LCBzaG93TG9hZGluZyA9IHRydWUsaXNVcmwgPSBmYWxzZSkge1xyXG4gICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4reKApicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3luY1Nob3dMb2FkaW5nTnVtKys7XHJcbiAgICB9XHJcbiAgICBzeW5jTnVtKys7XHJcblxyXG4gICAgd2hpbGUgKHN5bmNOdW0gPiAxMCkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAvLyDmjInooYzkuJrmn6Xor6LmjqXlj6PmmK/miorlj4LmlbDmi7zlnKh1cmzlkI7pnaLnmoTvvIzmiYDku6Xov5nph4zliKTmlq3kuIDkuItcclxuICAgICAgaWYgKGlzVXJsKSB7XHJcbiAgICAgICAgLy8g5a+56LGh5a2X56ym5Liy6L2s5o2iXHJcbiAgICAgICAgLy8gICBsZXQgc2VuZERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhLmJ1c2luZXNzLnJlcGxhY2UoXCJcXFwiXCIsXCJcIikpO1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3NlbmREYXRhJyxzZW5kRGF0YSk7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnZGF0YScsZGF0YSk7XHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6IGAke2hvc3R9LyR7dXJsfS8ke2RhdGEuYnVzaW5lc3MucmVwbGFjZShcIlxcXCJcIixcIlwiKX1gLC8q5Y675byV5Y+3Ki9cclxuICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgIC8vIGhlYWRlcjogeyAuLi5oZWFkZXIsIC4uLnsgdG9rZW46IGF1dGhlblNlcnZpY2UuZ2V0VG9rZW4oKSB9IH0sXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiB7IC4uLmhlYWRlcn0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVzLm1zZykpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyLmVyck1zZykpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDogYCR7aG9zdH0vJHt1cmx9YCxcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgIC8vIGhlYWRlcjogeyAuLi5oZWFkZXIsIC4uLnsgdG9rZW46IGF1dGhlblNlcnZpY2UuZ2V0VG9rZW4oKSB9IH0sXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiB7IC4uLmhlYWRlcn0sXHJcbiAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXMubXNnKSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIuZXJyTXNnKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy8g5ou85o6l5Zu+54mH6Lev5b6E5a2X56ym5Liy5LiT55So5Ye95pWwXHJcbiAgc3BsaXRTdHIodXJsOiBzdHJpbmcsIHNwbGl0Q2hhcjogc3RyaW5nLCBzcGxpdFN0ck9uZSA9IFwiX3RodW1iXzgwMFg1MDBcIikge1xyXG4gICAgdmFyIGFwcDogYW55ID0gZ2V0QXBwPGFueT4oKTtcclxuICAgIHZhciBwYXRoQXJyID0gdXJsLnNwbGl0KHNwbGl0Q2hhcik7XHJcbiAgICB2YXIgcGF0aEFyckxlZnQgPSBwYXRoQXJyWzBdICsgc3BsaXRTdHJPbmU7XHJcbiAgICBsZXQgcGF0aEFyckxlZnRBZGQ6IGFueSA9IGFwcC5nbG9iYWxEYXRhLmhvc3QgKyBcIi90aHVtYm5haWxcIiArIHBhdGhBcnJMZWZ0ICsgc3BsaXRDaGFyICsgcGF0aEFyclsxXTtcclxuICAgIGNvbnNvbGUubG9nKFwi5ou85o6l5ZCO55qE6ZO+5o6lXCIsIHBhdGhBcnJMZWZ0QWRkKTtcclxuICAgIHJldHVybiBwYXRoQXJyTGVmdEFkZDtcclxuICB9LFxyXG4gIGFzeW5jIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCwgaGVhZGVyID0geyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sIHNob3dMb2FkaW5nID0gdHJ1ZSxpc0xvZ2luPWZhbHNlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnMCcsICdzeW5jTnVtOiAnLCBzeW5jTnVtLCAnc3luY1Nob3dMb2FkaW5nTnVtOiAnLCBzeW5jU2hvd0xvYWRpbmdOdW0pXHJcbiAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295Lit4oCmJyxcclxuICAgICAgICAgIG1hc2s6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3luY1Nob3dMb2FkaW5nTnVtKys7XHJcbiAgICB9XHJcbiAgICBzeW5jTnVtKys7XHJcblxyXG4gICAgd2hpbGUgKHN5bmNOdW0gPiAxMCkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGAke2hvc3R9LyR7dXJsfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgLy8gaGVhZGVyOiB7IC4uLmhlYWRlciwgLi4ueyB0b2tlbjogYXV0aGVuU2VydmljZS5nZXRUb2tlbigpIH0gfSxcclxuICAgICAgICAgIGhlYWRlcjogeyAuLi5oZWFkZXJ9LFxyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICBzeW5jU2hvd0xvYWRpbmdOdW0tLTtcclxuICAgICAgICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3luY051bS0tO1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpO1xyXG4gICAgICAgICAgICAgIC8vIOaYr+WQpuaYr+eZu+W9leeVjOmdouWPkei1t+eahOmJtOadg+aTjeS9nFxyXG4gICAgICAgICAgICAgIGlmICghaXNMb2dpbikge1xyXG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzmmK9sb2dpbumJtOadg+eahOivneS4jeimgeaYvuekuuKAnOayoeacieeZu+W9leKAneeahOWtl+agt1xyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW4pIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVzLmRhdGEubXNnKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5lcnJNc2cpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBhc3luYyBwdXQodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCwgaGVhZGVyID0ge30sIHNob3dMb2FkaW5nID0gdHJ1ZSkge1xyXG4gICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4reKApicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3luY1Nob3dMb2FkaW5nTnVtKys7XHJcbiAgICB9XHJcbiAgICBzeW5jTnVtKys7XHJcblxyXG4gICAgd2hpbGUgKHN5bmNOdW0gPiAxMCkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGAke2hvc3R9LyR7dXJsfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXI6IHsgLi4uaGVhZGVyLCAuLi57IHRva2VuOiBhdXRoZW5TZXJ2aWNlLmdldFRva2VuKCkgfSB9LFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSA0MDEpIHtcclxuICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpO1xyXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5lcnJvckNvZGUgIT09ICcwJykge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcy5kYXRhLmVycm9yTXNnKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5lcnJNc2cpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBhc3luYyBkZWxldGUodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCwgaGVhZGVyID0ge30sIHNob3dMb2FkaW5nID0gdHJ1ZSkge1xyXG4gICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4reKApicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3luY1Nob3dMb2FkaW5nTnVtKys7XHJcbiAgICB9XHJcbiAgICBzeW5jTnVtKys7XHJcblxyXG4gICAgd2hpbGUgKHN5bmNOdW0gPiAxMCkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGAke2hvc3R9LyR7dXJsfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXI6IHsgLi4uaGVhZGVyLCAuLi57IHRva2VuOiBhdXRoZW5TZXJ2aWNlLmdldFRva2VuKCkgfSB9LFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgIHd4LmNsZWFyU3RvcmFnZVN5bmMoKTtcclxuICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEuZXJyb3JDb2RlICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXMuZGF0YS5lcnJvck1zZykpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICBzeW5jU2hvd0xvYWRpbmdOdW0tLTtcclxuICAgICAgICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3luY051bS0tO1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIuZXJyTXNnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iXX0=