"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = require("./services/request-service");
App({
    globalData: {
        host: 'http://www.qitianoffer.club',
    },
    onLaunch() {
        request_service_1.requestService.setHost(this.globalData.host);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0VBQTBEO0FBRTFELEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSw2QkFBNkI7S0FDdEM7SUFDRCxRQUFRO1FBQ0osZ0NBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqRCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXHJcbmltcG9ydCB7cmVxdWVzdFNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL3JlcXVlc3Qtc2VydmljZVwiO1xyXG5cclxuQXBwPElBcHBPcHRpb24+KHtcclxuICBnbG9iYWxEYXRhOiB7XHJcbiAgICAgIGhvc3Q6ICdodHRwOi8vd3d3LnFpdGlhbm9mZmVyLmNsdWInLFxyXG4gIH0sXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICAgIHJlcXVlc3RTZXJ2aWNlLnNldEhvc3QodGhpcy5nbG9iYWxEYXRhLmhvc3QpO1xyXG5cclxuICB9LFxyXG59KSJdfQ==