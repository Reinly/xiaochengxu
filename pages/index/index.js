// index.js
Page({
  //获取数据
  getData () {
    wx.request({
      url: 'https://api.weixin.qq.com/wxa/charge/usage/get?access_token=ACCESS_TOKEN',
      //备用测试接口
      //https://api.weixin.qq.com/wxa/charge/usage/get?access_token=ACCESS_TOKEN 
      method:'GET',
      data:{},
      success: (res) => {
        console.log(res,"成功了")
        console.log(res.statusCode,"成功了2")
      },
      fail: (err) => {
        console.log(err,"报错")
      },
      complete: (res) => {
        console.log(res,"执行完了")
      
      },
        
    })
  }


})
