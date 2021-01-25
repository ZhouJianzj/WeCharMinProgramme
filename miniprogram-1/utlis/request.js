// ajax请求
/*
1、封装功能函数 
        明确功能点
        函数内部应该保留固定的代码
        将动态的数据抽取成形参，以便于使用者调用

2、封装功能组件
       

        将动态的数据抽取成props参数，由使用者根据自身的情况一标签的形式传入
 */

 
// import config from './config'
// export default (url,data={},method = "get") =>{
//         // 请求是异步的
//        return new Promise((resolve,reject)=>{ 
//         wx.request({
//                 url,
//                 data,
//                 method,
//                 success:(res)=>{
//                         console.log("请求成功！",res)
//                         resolve(res.data)
//                 },
//                 fail:(err)=>{
//                         console.lo("请求失败！",err)
//                         reject(res)
//                 }
//               })
//        })
// }