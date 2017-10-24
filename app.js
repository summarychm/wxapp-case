App({
  globalData: {

  },
  onLaunch() {
    wx.request({
      url: "https://resources.ninghao.net/wxapp-case/db.json",
      success: (response) => {

        Object.assign(this.globalData, response.data);
        //console.log("app初始化方法",this.globalData)

        //判断当前页面是否已经加载了数据
        const currentPages = getCurrentPages();
        //等于0代表页面还未加载,不等于0则代表页面已经进行了加载
        if (currentPages.length !== 0) {
          //将当前页面重新加载
          currentPages[currentPages.length - 1].onLoad();
        }
      }
    })
  }
})