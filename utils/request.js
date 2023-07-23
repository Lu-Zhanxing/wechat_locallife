import config from './config'
export default (url, method='get', data={}) =>{
  return new Promise((resolve,reject) => {
    wx.request({
      url: config.host + url,
      method,
      data,
      success:(res)=>{
        resolve(res.data);
        // 这里为啥要用Promise包裹起来？
        // 我的理解就是，因为是异步任务，所以没有办法将返回的数据直接返回出去，然后赋值给data中的属性
        // 而使用了Promise的话，配合async和await直接使用，可以将返回的数据获取了之后，执行赋值给data中的属性的操作
      },
      fail:(err)=>{
        reject(err);
      }
    })
  })
}
