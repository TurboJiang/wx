Page({
  data: {
    city: "南昌",
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    items: []
  },
  onLoad() {
    let that = this//以防出现this作用域被覆盖 所有的this均指向数据源(data)
    // 小程序请求接口数据
    wx.request({
      url:'https://www.easy-mock.com/mock/5cbeb53158b92c6ed8f6f90a/movieWxapp/movie-WXAPP',
      data:{},//currentPage...传参给后端
      method:'GET',
      header:{'Content-type':'application/json'},//请求头
      success:function(res){
        console.log(res);
        that.setData({//设置数据
          items:res.data.data.movieList//赋值用冒号
        })
      }
    })
  }
})