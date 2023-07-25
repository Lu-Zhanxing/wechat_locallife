import {action, observable} from  'mobx-miniprogram'

export const store = observable({
  numA: 1,
  numB: 2,
  activeIndex: 0,
  get sum(){
    return this.numA + this.numB
  },

  updateNum1:action(function(step){
    this.numA += step
  }),
  updateNum2:action(function(step){
    this.numB += step
  }),
  updateActiveIndex:action(function(step){
    this.activeIndex = step
  })
})