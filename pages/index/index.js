// pages/index/index.js
import testDrive from '../../modules/test-drive.js';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides: null,
    entities: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      slides: app.globalData.slides,
      entities: app.globalData.vehicles
    })
    console.log(this.data)
  },
  readMore(event) {
    //新窗口跳转
    wx.navigateTo({
      url: `/pages/vehicles/show?id=${event.target.dataset.id}`,
    })
  },
  testDrive,
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