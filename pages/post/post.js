// pages/post/post.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId: 0,
    article: '<div>test wxParse</div>'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    this.setData({
      postId: id
    });
    const _this = this;
    wx.request({
      url: 'https://amumu233.duapp.com/proxyapi',
      data: {
        url: 'https://news-at.zhihu.com/api/4/news/'+id
      },
      success: function(res){
        console.log(res);
        _this.setData({
          ...res.data
        });
        let __html = _this.data.body;
        let str1 = ` style="background-image:url(${_this.data.image})"`;
        let str2 = `<div class="article-image-title">
                        <div class="article-title">${_this.data.title}</div>
                        <div class="image-source">${_this.data.image_source}</div>
                   </div>`;
        let position = __html.indexOf('<div class="img-place-holder">');
        let insertFlag = (str, flg, sn) => {
          var newstr = "";
          var beforeStr = str.slice(0, sn);
          var afterStr = str.slice(sn);
          newstr = beforeStr + flg + afterStr;
          return newstr;
        };
        if (position !== -1) {
          __html = insertFlag(__html, str2, position + 30);
          __html = insertFlag(__html, str1, __html.indexOf('<div class="img-place-holder">') + 29);
        }
        __html = __html.slice(0,-57);
        WxParse.wxParse('article', 'html', __html, _this, 5);
      }
    });
    
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