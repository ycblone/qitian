import { authenService } from './authen-service';
// var app:any = getApp<any>();
// 小程序es6转es5后不兼容async语法，npm引入第三方包，将runtime.js复制到项目目录下，在需要的地方require引入即可
let host = '';
const regeneratorRuntime = require('../utils/runtime.js');

let syncNum = 0;

let syncShowLoadingNum = 0;

async function sleep() {
  await new Promise(resolve => setTimeout(resolve, 100));
}

export const requestService = {
  setHost(_h: string) {
    host = _h;
  },

  async get(url: string, data: object, header = {}, showLoading = true) {
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
      await sleep();
    }
    return new Promise<any>((resolve, reject) => {
      wx.request({
        url: `${host}/${url}`,
        method: 'GET',
        header: { ...header, ...{ token: authenService.getToken() } },
        data,
        success(res: any) {
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
          } else {
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
      })
    });
  },
  // 拼接图片路径字符串专用函数
  splitStr(url: string, splitChar: string, splitStrOne = "_thumb_800X500") {
    var app: any = getApp<any>();
    var pathArr = url.split(splitChar);
    var pathArrLeft = pathArr[0] + splitStrOne;
    let pathArrLeftAdd: any = app.globalData.host + "/thumbnail" + pathArrLeft + splitChar + pathArr[1];
    console.log("拼接后的链接", pathArrLeftAdd);
    return pathArrLeftAdd;
  },
  async post(url: string, data: object, header = { 'content-type': 'application/json' }, showLoading = true,isLogin=false) {
    console.log('0', 'syncNum: ', syncNum, 'syncShowLoadingNum: ', syncShowLoadingNum)
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
      await sleep();
    }
    return new Promise<any>((resolve, reject) => {
      wx.request({
        url: `${host}/${url}`,
        method: 'POST',
        header: { ...header, ...{ token: authenService.getToken() } },
        data,
        success(res: any) {
            if (showLoading) {
            syncShowLoadingNum--;
            if (syncShowLoadingNum === 0) {
              wx.hideLoading({});
            }
          }
          syncNum--;
          if (res.data.code == 401) {
              wx.clearStorageSync();
              // 是否是登录界面发起的鉴权操作
              if (!isLogin) {
                wx.redirectTo({
                    url: '/pages/login/login',
                });
                return;
            }
          };
          if (res.data.code !== 200) {
            // 如果是login鉴权的话不要显示“没有登录”的字样
            if (!isLogin) {
                wx.showToast({
                    title: res.data.msg,
                    icon: 'none'
                });
            }
            reject(new Error(res.data.msg));
          } else {
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
      })
    });
  },

  async put(url: string, data: object, header = {}, showLoading = true) {
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
      await sleep();
    }
    return new Promise<any>((resolve, reject) => {
      wx.request({
        url: `${host}/${url}`,
        method: 'PUT',
        header: { ...header, ...{ token: authenService.getToken() } },
        data,
        success(res: any) {
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
          };
          if (res.data && res.data.errorCode !== '0') {
            reject(new Error(res.data.errorMsg));
          } else {
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
      })
    });
  },

  async delete(url: string, data: object, header = {}, showLoading = true) {
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
      await sleep();
    }
    return new Promise<any>((resolve, reject) => {
      wx.request({
        url: `${host}/${url}`,
        method: 'DELETE',
        header: { ...header, ...{ token: authenService.getToken() } },
        data,
        success(res: any) {
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
          };
          if (res.data && res.data.errorCode !== '0') {
            reject(new Error(res.data.errorMsg));
          } else {
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
      })
    });
  }
};
