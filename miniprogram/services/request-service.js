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
    get(url, data, header = {}, showLoading = true) {
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
                        if (res.statusCode == 401) {
                            wx.clearStorageSync();
                            wx.redirectTo({
                                url: '/pages/login/login',
                            });
                            return;
                        }
                        if (res.data.msgCode !== '0') {
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
                        if (res.data.msgCode == 401) {
                            wx.clearStorageSync();
                            if (!isLogin) {
                                wx.redirectTo({
                                    url: '/pages/login/login',
                                });
                                return;
                            }
                        }
                        ;
                        if (res.data.msgCode !== '0') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxREFBaUQ7QUFHakQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUUxRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFaEIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFM0IsU0FBZSxLQUFLOztRQUNsQixNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFHO0lBQzVCLE9BQU8sQ0FBQyxFQUFVO1FBQ2hCLElBQUksR0FBRyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUssR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxXQUFXLEdBQUcsSUFBSTs7WUFDbEUsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxrQkFBa0IsS0FBSyxDQUFDLEVBQUU7b0JBQzVCLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsS0FBSyxFQUFFLE1BQU07d0JBQ2IsSUFBSSxFQUFFLElBQUk7cUJBQ1gsQ0FBQyxDQUFDO2lCQUNKO2dCQUNELGtCQUFrQixFQUFFLENBQUM7YUFDdEI7WUFDRCxPQUFPLEVBQUUsQ0FBQztZQUVWLE9BQU8sT0FBTyxHQUFHLEVBQUUsRUFBRTtnQkFDbkIsTUFBTSxLQUFLLEVBQUUsQ0FBQzthQUNmO1lBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDMUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUs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NEJBQzFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7eUJBQ3RDOzZCQUFNOzRCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDZDtvQkFDSCxDQUFDO29CQUNELElBQUksQ0FBQyxHQUFHO3dCQUNOLElBQUksV0FBVyxFQUFFOzRCQUNmLGtCQUFrQixFQUFFLENBQUM7NEJBQ3JCLElBQUksa0JBQWtCLEtBQUssQ0FBQyxFQUFFO2dDQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNwQjt5QkFDRjt3QkFDRCxPQUFPLEVBQUUsQ0FBQzt3QkFDVixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aGVuU2VydmljZSB9IGZyb20gJy4vYXV0aGVuLXNlcnZpY2UnO1xyXG4vLyB2YXIgYXBwOmFueSA9IGdldEFwcDxhbnk+KCk7XHJcbi8vIOWwj+eoi+W6j2VzNui9rGVzNeWQjuS4jeWFvOWuuWFzeW5j6K+t5rOV77yMbnBt5byV5YWl56ys5LiJ5pa55YyF77yM5bCGcnVudGltZS5qc+WkjeWItuWIsOmhueebruebruW9leS4i++8jOWcqOmcgOimgeeahOWcsOaWuXJlcXVpcmXlvJXlhaXljbPlj69cclxubGV0IGhvc3QgPSAnJztcclxuY29uc3QgcmVnZW5lcmF0b3JSdW50aW1lID0gcmVxdWlyZSgnLi4vdXRpbHMvcnVudGltZS5qcycpO1xyXG5cclxubGV0IHN5bmNOdW0gPSAwO1xyXG5cclxubGV0IHN5bmNTaG93TG9hZGluZ051bSA9IDA7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzbGVlcCgpIHtcclxuICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0U2VydmljZSA9IHtcclxuICBzZXRIb3N0KF9oOiBzdHJpbmcpIHtcclxuICAgIGhvc3QgPSBfaDtcclxuICB9LFxyXG5cclxuICBhc3luYyBnZXQodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCwgaGVhZGVyID0ge30sIHNob3dMb2FkaW5nID0gdHJ1ZSkge1xyXG4gICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4reKApicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3luY1Nob3dMb2FkaW5nTnVtKys7XHJcbiAgICB9XHJcbiAgICBzeW5jTnVtKys7XHJcblxyXG4gICAgd2hpbGUgKHN5bmNOdW0gPiAxMCkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGAke2hvc3R9LyR7dXJsfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXI6IHsgLi4uaGVhZGVyLCAuLi57IHRva2VuOiBhdXRoZW5TZXJ2aWNlLmdldFRva2VuKCkgfSB9LFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgIHd4LmNsZWFyU3RvcmFnZVN5bmMoKTtcclxuICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5tc2dDb2RlICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXMubXNnKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5lcnJNc2cpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vIOaLvOaOpeWbvueJh+i3r+W+hOWtl+espuS4suS4k+eUqOWHveaVsFxyXG4gIHNwbGl0U3RyKHVybDogc3RyaW5nLCBzcGxpdENoYXI6IHN0cmluZywgc3BsaXRTdHJPbmUgPSBcIl90aHVtYl84MDBYNTAwXCIpIHtcclxuICAgIHZhciBhcHA6IGFueSA9IGdldEFwcDxhbnk+KCk7XHJcbiAgICB2YXIgcGF0aEFyciA9IHVybC5zcGxpdChzcGxpdENoYXIpO1xyXG4gICAgdmFyIHBhdGhBcnJMZWZ0ID0gcGF0aEFyclswXSArIHNwbGl0U3RyT25lO1xyXG4gICAgbGV0IHBhdGhBcnJMZWZ0QWRkOiBhbnkgPSBhcHAuZ2xvYmFsRGF0YS5ob3N0ICsgXCIvdGh1bWJuYWlsXCIgKyBwYXRoQXJyTGVmdCArIHNwbGl0Q2hhciArIHBhdGhBcnJbMV07XHJcbiAgICBjb25zb2xlLmxvZyhcIuaLvOaOpeWQjueahOmTvuaOpVwiLCBwYXRoQXJyTGVmdEFkZCk7XHJcbiAgICByZXR1cm4gcGF0aEFyckxlZnRBZGQ7XHJcbiAgfSxcclxuICBhc3luYyBwb3N0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QsIGhlYWRlciA9IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LCBzaG93TG9hZGluZyA9IHRydWUsaXNMb2dpbj1mYWxzZSkge1xyXG4gICAgY29uc29sZS5sb2coJzAnLCAnc3luY051bTogJywgc3luY051bSwgJ3N5bmNTaG93TG9hZGluZ051bTogJywgc3luY1Nob3dMb2FkaW5nTnVtKVxyXG4gICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4reKApicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHN5bmNTaG93TG9hZGluZ051bSsrO1xyXG4gICAgfVxyXG4gICAgc3luY051bSsrO1xyXG5cclxuICAgIHdoaWxlIChzeW5jTnVtID4gMTApIHtcclxuICAgICAgYXdhaXQgc2xlZXAoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBgJHtob3N0fS8ke3VybH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcjogeyAuLi5oZWFkZXIsIC4uLnsgdG9rZW46IGF1dGhlblNlcnZpY2UuZ2V0VG9rZW4oKSB9IH0sXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICBzeW5jU2hvd0xvYWRpbmdOdW0tLTtcclxuICAgICAgICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3luY051bS0tO1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLm1zZ0NvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpO1xyXG4gICAgICAgICAgICAgIC8vIOaYr+WQpuaYr+eZu+W9leeVjOmdouWPkei1t+eahOmJtOadg+aTjeS9nFxyXG4gICAgICAgICAgICAgIGlmICghaXNMb2dpbikge1xyXG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLm1zZ0NvZGUgIT09ICcwJykge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzmmK9sb2dpbumJtOadg+eahOivneS4jeimgeaYvuekuuKAnOayoeacieeZu+W9leKAneeahOWtl+agt1xyXG4gICAgICAgICAgICBpZiAoIWlzTG9naW4pIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVzLmRhdGEubXNnKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5lcnJNc2cpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBhc3luYyBwdXQodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCwgaGVhZGVyID0ge30sIHNob3dMb2FkaW5nID0gdHJ1ZSkge1xyXG4gICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4reKApicsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgc3luY1Nob3dMb2FkaW5nTnVtKys7XHJcbiAgICB9XHJcbiAgICBzeW5jTnVtKys7XHJcblxyXG4gICAgd2hpbGUgKHN5bmNOdW0gPiAxMCkge1xyXG4gICAgICBhd2FpdCBzbGVlcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGAke2hvc3R9LyR7dXJsfWAsXHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXI6IHsgLi4uaGVhZGVyLCAuLi57IHRva2VuOiBhdXRoZW5TZXJ2aWNlLmdldFRva2VuKCkgfSB9LFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc3VjY2VzcyhyZXM6IGFueSkge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgIHd4LmNsZWFyU3RvcmFnZVN5bmMoKTtcclxuICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luL2xvZ2luJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEuZXJyb3JDb2RlICE9PSAnMCcpIHtcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXMuZGF0YS5lcnJvck1zZykpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICBzeW5jU2hvd0xvYWRpbmdOdW0tLTtcclxuICAgICAgICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3luY051bS0tO1xyXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIuZXJyTXNnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgZGVsZXRlKHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QsIGhlYWRlciA9IHt9LCBzaG93TG9hZGluZyA9IHRydWUpIHtcclxuICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK3igKYnLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHN5bmNTaG93TG9hZGluZ051bSsrO1xyXG4gICAgfVxyXG4gICAgc3luY051bSsrO1xyXG5cclxuICAgIHdoaWxlIChzeW5jTnVtID4gMTApIHtcclxuICAgICAgYXdhaXQgc2xlZXAoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBgJHtob3N0fS8ke3VybH1gLFxyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyOiB7IC4uLmhlYWRlciwgLi4ueyB0b2tlbjogYXV0aGVuU2VydmljZS5nZXRUb2tlbigpIH0gfSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcclxuICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICBzeW5jU2hvd0xvYWRpbmdOdW0tLTtcclxuICAgICAgICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3luY051bS0tO1xyXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09IDQwMSkge1xyXG4gICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbi9sb2dpbicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmVycm9yQ29kZSAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVzLmRhdGEuZXJyb3JNc2cpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyLmVyck1zZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIl19