"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            }),
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXO2dCQUN0RCxPQUFPLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9ncy50c1xyXG4vLyBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpXHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgbG9nczogW10sXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBsb2dzOiAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKChsb2c6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lKG5ldyBEYXRlKGxvZykpXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICB9LFxyXG59KVxyXG4iXX0=