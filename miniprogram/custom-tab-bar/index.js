Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/home/home",
      iconPath: "/img/icon_component.png",
      selectedIconPath: "/img/icon_component_HL.png",
      text: "专场宣讲会"
    },{
      pagePath: "/pages/selectMeeting/selectMeeting",
      iconPath: "/img/icon_component.png",
      selectedIconPath: "/img/icon_component_HL.png",
      text: "大型双选会"
    },{
      pagePath: "/pages/findJob/findJob",
      iconPath: "/img/icon_component.png",
      selectedIconPath: "/img/icon_component_HL.png",
      text: "找实习"
    }, {
      pagePath: "/pages/my/my",
      iconPath: "/img/icon_API.png",
      selectedIconPath: "/img/icon_API_HL.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})