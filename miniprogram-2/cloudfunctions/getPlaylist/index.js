// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'miniprogram-7gbc044xcd3a8430'
})

//引入云数据库
const db = cloud.database()

//引入云数据库的playlist集合，并定义一个常量
const playlistCollection = db.collection('playlist')

//引入网络请求库axios
const axios = require('axios')

//定义接口地址
const URL = 'https://jianzhou.cn1.utools.club/top/playlist/highquality?before=1503639064232&limit=20'

// 云函数入口函数
exports.main = async (event, context) => {

  //使用axios发送异步get请求，把结果赋值给data变量
  const {
    data
  } = await axios.get(URL)
  console.log('####' + JSON.stringify(data))
  if (data.code >= 1000) {
    console.log(data.msg)
    return 0
  }
  //解析data的result属性 获得请求的歌单结果
  const playlist = data.playlists
  //定义一个新的数组 用于存放处理后的歌单
  const newData = []
  //遍历歌单数组
  for (let i = 0, len = playlist.length; i < len; i++) {
    //给每个歌单信息增加createTime
    let pl = playlist[i]
    //用数据库服务器时间作为歌单被创建时间
    pl.createTime = db.serverDate()
    //处理后的歌单记录加入新数组
    newData.push(pl)
  }
  console.log(newData)
  if (newData.length > 0) {
    //异步调用云数据库的新增操作
    await playlistCollection.add({
      data: [...newData]
    }).then((res) => {
      console.log('插入成功')
    }).catch((err) => {
      console.log('插入失败')
    })
  }
  return newData.length
}