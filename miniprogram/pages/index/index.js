Page({
  onShow () {
    var that = this
    wx.login({
      success (res) {
        wx.setStorageSync('openId', res.code) //纬度
        // wx.navigateTo({
        //   url: 'https://ynyc.yngishere.com/googlemap1.html?openid=' + res.code,
        // })
        that.setData({
          // webUrl: 'https://ynyc.yngishere.com/googlemap1.html?openid=' + res.code
          webUrl: 'https://kuaixi.siheyouxuan.com/'

        })
      }
    })
   
  },
  onLoad: function() {
    let that = this
    wx.login({
      success (res) {
        wx.setStorageSync('openId', res.code) //纬度
      }
    })
    setInterval(function(){
      that.getPosition()
    },4000)
  },
  data:{
      oldLatitude:null,
      oldLongitude:null,
      webUrl: ''
  },
  getPosition () {
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.setStorageSync('latitude', latitude)
        wx.setStorageSync('longitude', longitude)
        // that.postPosition ()
     
    },fail() {
      that.fn_fail();
    }
    })
  },
  postPosition () {
    console.log(wx.getStorageSync('openId'))
    if (!wx.getStorageSync('openId'))
      return
    var params = {
      latitude:wx.getStorageSync('latitude'),
      longitude: wx.getStorageSync('longitude'),
      openId: wx.getStorageSync('openId')
    }
    wx.request({
      url: "https://ynyc.yngishere.com/ZHBaccoGISServer/RealTimeLocationOfApplet/save.action?position="+params.longitude + ',' +  params.latitude+"&oppenid="+params.openId,
      // data: params,
      data:{},
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log(res)
        
      },
      error:(err) =>{
        console.log(err)
      }
    })
  }
})
