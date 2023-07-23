// pages/home/home.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    nineListData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList();
    this.getNineList()
  },

  // 获取轮播图数据
  async getSwiperList(){
    let swiperListData = await request('/slides')
    this.setData({
      swiperList:swiperListData
    })
  },
  // 获取九宫格数据
  async getNineList(){
    let nineListData = await request('/categories')
    this.setData({
      nineList:nineListData
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