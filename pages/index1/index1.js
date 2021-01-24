// pages/index1/index1.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
             
                loading :"点击到下一个页面",
                userInfo :{}
        },

        // 点击事件的绑定,使用到的冒泡事件
        parent(){
                // 页面的跳转 这个是销毁之前的页面，navigateTo是不是销毁
                wx.redirectTo({
                        url: '/pages/index2/index2',
                      })
        },
        child(){
               
        },

      getInfo(reInfo){
          
        //     获取用户的信息，并且有返回值，再把值传递给reInfo
            if(reInfo.detail.userInfo){
                    this.setData({
                            userInfo : reInfo.detail.userInfo
                    })
            }
      },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                // 得到数据
                // console.log(this.data.msg);
                // 设置数据
                this.setData({
                        msg : "maopaihaoren"
                })
                // 下面的是为了在登录一次成功之后就不需要再次的登录了
                wx.getUserInfo({
                        // 下面传输的数据是成功就设置变量userInfo为获取到的数据
                  success:(reInfo)=>{
                          this.setData({
                                  reInfo :reInfo.userInfo
                          })
                  },
                  fail : (err)=>{
                          console.log("没有授权")
                  }
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