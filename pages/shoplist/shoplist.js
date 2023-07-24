// pages/shoplist/shoplist.js
import config from '../../utils/config'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    categoriesList:[],
    page:1,
    pageSize:10,
    total:0,
    onloading:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      query:options
    })
    this.getCategoriesList()
  },

  //获取列表数据
  getCategoriesList(cb){
    // 节流
    this.setData({
      onloading:true
    })
    // 请求的时候显示loading效果
    wx.showLoading({
      title: 'loading...',
    })
    let {page,pageSize,categoriesList} = this.data
    // 注意：这里没有用封装好的请求，是因为不只需要data，还需要返回的别的数据
    wx.request({
      url: config.host + `/categories/${this.data.query.id}/shops`,
      method:'get',
      data:{
        _page:page,
        _limit:pageSize
      },
      success:(res) => {
        let concatCategoriesList = categoriesList?[...categoriesList,...res.data]:res.data;
        this.setData({
          categoriesList:concatCategoriesList,
          total:res.header['X-Total-Count'] - 0,
        })
      },
      complete:() => {
        wx.hideLoading()
        this.setData({
          onloading:false
        })
        cb && cb()
      }
    })
  }, 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.query.name,
    })
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
    console.log("用户触发了下拉刷新");
    // 设置下拉刷新
    this.setData({
      page:1,
      categoriesList:[],
      total:0
    })
    this.getCategoriesList(()=>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("用户出发了上拉触底");
    let {page,pageSize,total,onloading} = this.data
    // 如果上一个请求还在请求中，则不会发起下一个请求
    if (onloading) return
    // 如果数据列表展示完毕，也不会再发请求
    if(page * pageSize >= total) {
      wx.showToast({
        title: '已经到底了哦~',
        icon:'none'
      })
      return
    }
    let newPage = page + 1
    this.setData({
      page:newPage
    })
    this.getCategoriesList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})