import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../store/stroe'

Component({
  options:{
    "styleIsolation":"shared"
  },
  behaviors: [storeBindingsBehavior],
  storeBindings:{
    store,
    fields:{
      // numA: 'numA',
      // numB: 'numB',
      sum: 'sum',
      active:'activeIndex'
    },
    actions: {
      // updateNum2:'updateNum2'
      updateActive:'updateActiveIndex'
    }
  },
  observers:{
    'sum':function(val){
      this.setData({
        'list[1].info':val
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list": [
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "iconPath": "/static/images/tabs/home.png",
        "selectedIconPath": "/static/images/tabs/home-active.png"
      },
      {
        "pagePath": "/pages/messsage/message",
        "text": "消息",
        "iconPath": "/static/images/tabs/message.png",
        "selectedIconPath": "/static/images/tabs/message-active.png",
        info: 0
      },
      {
        "pagePath": "/pages/contactus/contactus",
        "text": "联系我们",
        "iconPath": "/static/images/tabs/contact.png",
        "selectedIconPath": "/static/images/tabs/contact-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      // this.setData({ active: event.detail });
      this.updateActive(event.detail)
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})
