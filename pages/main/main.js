//index.js
//获取应用实例
const { formatDate }  = require('../../utils/util.js');
const app = getApp()

Page({
  data: {
    hasRefesh: false,
    lastDate: '',
    today: {},
    history: []
  },
  onLoad: function () {
    var _this = this;
    wx.request({
      url: 'https://amumu233.duapp.com/proxyapi',
      data: {
        url: "https://news-at.zhihu.com/api/4/news/latest"
      },
      success: function(res){
        _this.setData({
          today: res.data,
          laseDate: res.data.date
        });
      }
    })
  },
  lower: function(e){
    this.setData({
      hasRefesh: true
    });
    const _this = this;
    let lastDate = this.data.laseDate;
    this.__history = this.data.history;
    wx.request({
      url: "https://amumu233.duapp.com/proxyapi",
      data: {
        url: "https://news-at.zhihu.com/api/4/news/before/"+lastDate
      },
      success: function(res){
        if(_this.lastDate != res.data.date){
          res.data.formatDate = formatDate(res.data.date)

          _this.__history.push(res.data);
        }
        _this.setData({
          history: _this.__history,
          laseDate: res.data.date,
          hasRefesh: false
        })
      }
    })
  }
})
