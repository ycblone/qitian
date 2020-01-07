// app.ts
import {requestService} from "./services/request-service";

App<IAppOption>({
  globalData: {
      host: 'http://www.qitianoffer.club',
  },
  onLaunch() {
      requestService.setHost(this.globalData.host);

  },
})