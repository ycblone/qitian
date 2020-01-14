Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#ce4920",
    list: [{
      pagePath: "/pages/home/home",
      iconPath: "/img/class.png",
      selectedIconPath: "/img/classS.png",
      text: "专场宣讲会"
    },{
      pagePath: "/pages/selectMeeting/selectMeeting",
      iconPath: "/img/oneToOne.png",
      selectedIconPath: "/img/oneToOneS.png",
      text: "大型双选会"
    },{
      pagePath: "/pages/findJob/findJob",
      iconPath: "/img/practice.png",
      selectedIconPath: "/img/practiceS.png",
      text: "找实习"
    }, {
      pagePath: "/pages/my/my",
      iconPath: "/img/my.png",
      selectedIconPath: "/img/myS.png",
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