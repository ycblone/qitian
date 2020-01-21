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
                    let dataTemp = '';
                    if (typeof data.business == "string") {
                        dataTemp = data.business.replace("\"", "");
                    }
                    else {
                        dataTemp = data.business;
                    }
                    wx.request({
                        url: `${host}/${url}/${dataTemp}`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxREFBaUQ7QUFHakQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUUxRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFFaEIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFFM0IsU0FBZSxLQUFLOztRQUNsQixNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFHO0lBQzVCLE9BQU8sQ0FBQyxFQUFVO1FBQ2hCLElBQUksR0FBRyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUssR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxXQUFXLEdBQUcsSUFBSSxFQUFDLEtBQUssR0FBRyxLQUFLOztZQUNoRixJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLGtCQUFrQixLQUFLLENBQUMsRUFBRTtvQkFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixLQUFLLEVBQUUsTUFBTTt3QkFDYixJQUFJLEVBQUUsSUFBSTtxQkFDWCxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0Qsa0JBQWtCLEVBQUUsQ0FBQzthQUN0QjtZQUNELE9BQU8sRUFBRSxDQUFDO1lBRVYsT0FBTyxPQUFPLEdBQUcsRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssRUFBRSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLElBQUksT0FBTyxDQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUUxQyxJQUFJLEtBQUssRUFBRTtv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QUksa0JBQWtCLEtBQUssQ0FBQyxFQUFFO2dDQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNwQjt5QkFDRjt3QkFDRCxPQUFPLEVBQUUsQ0FBQzt3QkFDVixJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFOzRCQUN6QixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs0QkFDdEIsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQ0FDWixHQUFHLEVBQUUsb0JBQW9COzZCQUMxQixDQUFDLENBQUM7NEJBQ0gsT0FBTzt5QkFDUjt3QkFBQSxDQUFDO3dCQUNGLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxHQUFHLEVBQUU7NEJBQzFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7eUJBQ3RDOzZCQUFNOzRCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDZDtvQkFDSCxDQUFDO29CQUNELElBQUksQ0FBQyxHQUFHO3dCQUNOLElBQUksV0FBVyxFQUFFOzRCQUNmLGtCQUFrQixFQUFFLENBQUM7NEJBQ3JCLElBQUksa0JBQWtCLEtBQUssQ0FBQyxFQUFFO2dDQUM1QixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNwQjt5QkFDRjt3QkFDRCxPQUFPLEVBQUUsQ0FBQzt3QkFDVixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aGVuU2VydmljZSB9IGZyb20gJy4vYXV0aGVuLXNlcnZpY2UnO1xyXG4vLyB2YXIgYXBwOmFueSA9IGdldEFwcDxhbnk+KCk7XHJcbi8vIOWwj+eoi+W6j2VzNui9rGVzNeWQjuS4jeWFvOWuuWFzeW5j6K+t5rOV77yMbnBt5byV5YWl56ys5LiJ5pa55YyF77yM5bCGcnVudGltZS5qc+WkjeWItuWIsOmhueebruebruW9leS4i++8jOWcqOmcgOimgeeahOWcsOaWuXJlcXVpcmXlvJXlhaXljbPlj69cclxubGV0IGhvc3QgPSAnJztcclxuY29uc3QgcmVnZW5lcmF0b3JSdW50aW1lID0gcmVxdWlyZSgnLi4vdXRpbHMvcnVudGltZS5qcycpO1xyXG5cclxubGV0IHN5bmNOdW0gPSAwO1xyXG5cclxubGV0IHN5bmNTaG93TG9hZGluZ051bSA9IDA7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzbGVlcCgpIHtcclxuICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0U2VydmljZSA9IHtcclxuICBzZXRIb3N0KF9oOiBzdHJpbmcpIHtcclxuICAgIGhvc3QgPSBfaDtcclxuICB9LFxyXG5cclxuICBhc3luYyBnZXQodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCwgaGVhZGVyID0ge30sIHNob3dMb2FkaW5nID0gdHJ1ZSxpc1VybCA9IGZhbHNlKSB7XHJcbiAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295Lit4oCmJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzeW5jU2hvd0xvYWRpbmdOdW0rKztcclxuICAgIH1cclxuICAgIHN5bmNOdW0rKztcclxuXHJcbiAgICB3aGlsZSAoc3luY051bSA+IDEwKSB7XHJcbiAgICAgIGF3YWl0IHNsZWVwKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIC8vIOaMieihjOS4muafpeivouaOpeWPo+aYr+aKiuWPguaVsOaLvOWcqHVybOWQjumdoueahO+8jOaJgOS7pei/memHjOWIpOaWreS4gOS4i1xyXG4gICAgICBpZiAoaXNVcmwpIHtcclxuICAgICAgICAvLyDlr7nosaHlrZfnrKbkuLLovazmjaJcclxuICAgICAgICAvLyAgIGxldCBzZW5kRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEuYnVzaW5lc3MucmVwbGFjZShcIlxcXCJcIixcIlwiKSk7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc2VuZERhdGEnLHNlbmREYXRhKTtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdkYXRhJyxkYXRhKTtcclxuICAgICAgICAgIGxldCBkYXRhVGVtcCA9ICcnO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmJ1c2luZXNzPT1cInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgZGF0YVRlbXAgPSBkYXRhLmJ1c2luZXNzLnJlcGxhY2UoXCJcXFwiXCIsIFwiXCIpO1xyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgIGRhdGFUZW1wID0gZGF0YS5idXNpbmVzcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6IGAke2hvc3R9LyR7dXJsfS8ke2RhdGFUZW1wfWAsLyrljrvlvJXlj7cqL1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiB7IC4uLmhlYWRlciwgLi4ueyB0b2tlbjogYXV0aGVuU2VydmljZS5nZXRUb2tlbigpIH0gfSxcclxuICAgICAgICAgICAgICAvLyBoZWFkZXI6IHsgLi4uaGVhZGVyfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXMubXNnKSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIuZXJyTXNnKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgdXJsOiBgJHtob3N0fS8ke3VybH1gLFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiB7IC4uLmhlYWRlciwgLi4ueyB0b2tlbjogYXV0aGVuU2VydmljZS5nZXRUb2tlbigpIH0gfSxcclxuICAgICAgICAgICAgICAvLyBoZWFkZXI6IHsgLi4uaGVhZGVyfSxcclxuICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeW5jU2hvd0xvYWRpbmdOdW0tLTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3luY051bS0tO1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LmNsZWFyU3RvcmFnZVN5bmMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbi9sb2dpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcy5tc2cpKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeW5jU2hvd0xvYWRpbmdOdW0tLTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3luY051bS0tO1xyXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5lcnJNc2cpKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvLyDmi7zmjqXlm77niYfot6/lvoTlrZfnrKbkuLLkuJPnlKjlh73mlbBcclxuICBzcGxpdFN0cih1cmw6IHN0cmluZywgc3BsaXRDaGFyOiBzdHJpbmcsIHNwbGl0U3RyT25lID0gXCJfdGh1bWJfODAwWDUwMFwiKSB7XHJcbiAgICB2YXIgYXBwOiBhbnkgPSBnZXRBcHA8YW55PigpO1xyXG4gICAgdmFyIHBhdGhBcnIgPSB1cmwuc3BsaXQoc3BsaXRDaGFyKTtcclxuICAgIHZhciBwYXRoQXJyTGVmdCA9IHBhdGhBcnJbMF0gKyBzcGxpdFN0ck9uZTtcclxuICAgIGxldCBwYXRoQXJyTGVmdEFkZDogYW55ID0gYXBwLmdsb2JhbERhdGEuaG9zdCArIFwiL3RodW1ibmFpbFwiICsgcGF0aEFyckxlZnQgKyBzcGxpdENoYXIgKyBwYXRoQXJyWzFdO1xyXG4gICAgY29uc29sZS5sb2coXCLmi7zmjqXlkI7nmoTpk77mjqVcIiwgcGF0aEFyckxlZnRBZGQpO1xyXG4gICAgcmV0dXJuIHBhdGhBcnJMZWZ0QWRkO1xyXG4gIH0sXHJcbiAgYXN5bmMgcG9zdCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0LCBoZWFkZXIgPSB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwgc2hvd0xvYWRpbmcgPSB0cnVlLGlzTG9naW49ZmFsc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKCcwJywgJ3N5bmNOdW06ICcsIHN5bmNOdW0sICdzeW5jU2hvd0xvYWRpbmdOdW06ICcsIHN5bmNTaG93TG9hZGluZ051bSlcclxuICAgIGlmIChzaG93TG9hZGluZykge1xyXG4gICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK3igKYnLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzeW5jU2hvd0xvYWRpbmdOdW0rKztcclxuICAgIH1cclxuICAgIHN5bmNOdW0rKztcclxuXHJcbiAgICB3aGlsZSAoc3luY051bSA+IDEwKSB7XHJcbiAgICAgIGF3YWl0IHNsZWVwKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYCR7aG9zdH0vJHt1cmx9YCxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHsgLi4uaGVhZGVyLCAuLi57IHRva2VuOiBhdXRoZW5TZXJ2aWNlLmdldFRva2VuKCkgfSB9LFxyXG4gICAgICAgICAgLy8gaGVhZGVyOiB7IC4uLmhlYWRlcn0sXHJcbiAgICAgICAgICBkYXRhLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzOiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgICAgLy8g5piv5ZCm5piv55m75b2V55WM6Z2i5Y+R6LW355qE6Ym05p2D5pON5L2cXHJcbiAgICAgICAgICAgICAgaWYgKCFpc0xvZ2luKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOaYr2xvZ2lu6Ym05p2D55qE6K+d5LiN6KaB5pi+56S64oCc5rKh5pyJ55m75b2V4oCd55qE5a2X5qC3XHJcbiAgICAgICAgICAgIGlmICghaXNMb2dpbikge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEubXNnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXMuZGF0YS5tc2cpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyLmVyck1zZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIHB1dCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0LCBoZWFkZXIgPSB7fSwgc2hvd0xvYWRpbmcgPSB0cnVlKSB7XHJcbiAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295Lit4oCmJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzeW5jU2hvd0xvYWRpbmdOdW0rKztcclxuICAgIH1cclxuICAgIHN5bmNOdW0rKztcclxuXHJcbiAgICB3aGlsZSAoc3luY051bSA+IDEwKSB7XHJcbiAgICAgIGF3YWl0IHNsZWVwKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYCR7aG9zdH0vJHt1cmx9YCxcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcjogeyAuLi5oZWFkZXIsIC4uLnsgdG9rZW46IGF1dGhlblNlcnZpY2UuZ2V0VG9rZW4oKSB9IH0sXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDQwMSkge1xyXG4gICAgICAgICAgICB3eC5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcbiAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbi9sb2dpbicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmVycm9yQ29kZSAhPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVzLmRhdGEuZXJyb3JNc2cpKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyLmVyck1zZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGRlbGV0ZSh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0LCBoZWFkZXIgPSB7fSwgc2hvd0xvYWRpbmcgPSB0cnVlKSB7XHJcbiAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgaWYgKHN5bmNTaG93TG9hZGluZ051bSA9PT0gMCkge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295Lit4oCmJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzeW5jU2hvd0xvYWRpbmdOdW0rKztcclxuICAgIH1cclxuICAgIHN5bmNOdW0rKztcclxuXHJcbiAgICB3aGlsZSAoc3luY051bSA+IDEwKSB7XHJcbiAgICAgIGF3YWl0IHNsZWVwKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYCR7aG9zdH0vJHt1cmx9YCxcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcjogeyAuLi5oZWFkZXIsIC4uLnsgdG9rZW46IGF1dGhlblNlcnZpY2UuZ2V0VG9rZW4oKSB9IH0sXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBzdWNjZXNzKHJlczogYW55KSB7XHJcbiAgICAgICAgICBpZiAoc2hvd0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgc3luY1Nob3dMb2FkaW5nTnVtLS07XHJcbiAgICAgICAgICAgIGlmIChzeW5jU2hvd0xvYWRpbmdOdW0gPT09IDApIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHN5bmNOdW0tLTtcclxuICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PSA0MDEpIHtcclxuICAgICAgICAgICAgd3guY2xlYXJTdG9yYWdlU3luYygpO1xyXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4vbG9naW4nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5lcnJvckNvZGUgIT09ICcwJykge1xyXG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcy5kYXRhLmVycm9yTXNnKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKGVycikge1xyXG4gICAgICAgICAgaWYgKHNob3dMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHN5bmNTaG93TG9hZGluZ051bS0tO1xyXG4gICAgICAgICAgICBpZiAoc3luY1Nob3dMb2FkaW5nTnVtID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoe30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzeW5jTnVtLS07XHJcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVyci5lcnJNc2cpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdfQ==