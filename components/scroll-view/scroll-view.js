//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    headList:['来源','转化','产品','状态','金额(元)','进件时间'],
    motto: 'Hello World',
    userInfo: {},
    currentScrollPos:0,
    screenWidth: wx.getSystemInfoSync().windowWidth,
    isFixed:'fixed',
    isFixed:'relative',
    isNone:'block',
    listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" },
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  upper: function(e) {
    // console.log(e)

  },
  lower: function(e) {
    // console.log(e)

  },
  scroll: function(e) {
    console.log("左右滑")
    this.setData({
      isFixed:'relative',
      isNone:'none'
    })
  },
  onPageScroll: function (e) {
    console.log("上下拉")
    this.setData({
      isFixed:'fixed',
      isNone:'block'
    })
  },  
  onLoad: function () {

  }



})
