// pages/stories/index.js


const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    entities:null,
    currentVid:null,
    currentVideo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取汽车故事数据
    this.setData({
      entities:app.globalData.stories
    });
  },
  play(event){

    // //停止页面其他视频
    // if(this.data.currentVid!==null){
    //   console.log(this.data.currentVid)
    //   this.data.currentVideo.pause()
    // }

    const vid = event.target.dataset.vid;
    const currentVideo = wx.createVideoContext(`${vid}`);
    
    currentVideo.play();
    console.log(vid,currentVideo);
    
    this.setData({
      currentVideo,
      currentVid: vid
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})