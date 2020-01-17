"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = require("./services/request-service");
App({
    globalData: {
        host: 'http://www.qitianoffer.club',
        code: '',
    },
    onLaunch() {
        request_service_1.requestService.setHost(this.globalData.host);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsZ0VBQTBEO0FBRTFELEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSw2QkFBNkI7UUFDbkMsSUFBSSxFQUFFLEVBQUU7S0FFWDtJQUNELFFBQVE7UUFDSixnQ0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpELENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcclxuaW1wb3J0IHtyZXF1ZXN0U2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvcmVxdWVzdC1zZXJ2aWNlXCI7XHJcblxyXG5BcHA8SUFwcE9wdGlvbj4oe1xyXG4gIGdsb2JhbERhdGE6IHtcclxuICAgICAgaG9zdDogJ2h0dHA6Ly93d3cucWl0aWFub2ZmZXIuY2x1YicsXHJcbiAgICAgIGNvZGU6ICcnLFxyXG5cclxuICB9LFxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgICByZXF1ZXN0U2VydmljZS5zZXRIb3N0KHRoaXMuZ2xvYmFsRGF0YS5ob3N0KTtcclxuXHJcbiAgfSxcclxufSkiXX0=