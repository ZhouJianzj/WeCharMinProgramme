// pages/music/music.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                // 顶部滚动条的图片数据
                imageUrl:[
                        
                ],
                // 下面playList图片后相应的说明
                playList:[
                        
                ],
                // 底部的排行榜
                rankingList:[
                        {url:"http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100",
                        number:1,
                        name:"思"
                },
                        {url:"http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100",
                        number:2,
                        name:"相"
                },
                        {url:"http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100",
                        number:3,
                        name:"望"
                },
                
                ]

        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                // 顶部swiper数据的接口调用
                wx.request({
                  url: 'https://jianzhou.cn1.utools.club/banner',
                  data:{type:2},
                  success:(res) =>{
                        console.log(res.data.banners)
                        this.setData({
                                imageUrl: res.data.banners
                        })
                  },
                  fail:(res)=>{
                          console.log("请求失败")
                  }
                })
                // 下面为你精心推荐数据的导入
               this._getPlayList()
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
        onShareAppMessage: function () {},
        _getPlayList(){
                wx.showLoading({
                        title: '加载中',
                      })
                      wx.cloud.callFunction({
                       name:'playlist'
                      }).then((res)=>{
                              console.log(res)
                              this.setData({
                                      playList:res.result
                              })
                              wx.hideLoading()
                      })
        },
       
})