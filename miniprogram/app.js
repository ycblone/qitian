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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0VBQTBEO0FBRTFELEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSw2QkFBNkI7S0FDdEM7SUFDRCxRQUFRO1FBQ0osZ0NBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqRCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG5pbXBvcnQge3JlcXVlc3RTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9yZXF1ZXN0LXNlcnZpY2VcIjtcblxuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YToge1xuICAgICAgaG9zdDogJ2h0dHA6Ly93d3cucWl0aWFub2ZmZXIuY2x1YicsXG4gIH0sXG4gIG9uTGF1bmNoKCkge1xuICAgICAgcmVxdWVzdFNlcnZpY2Uuc2V0SG9zdCh0aGlzLmdsb2JhbERhdGEuaG9zdCk7XG5cbiAgfSxcbn0pIl19