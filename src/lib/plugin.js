import observer from './observer'

export default {
  install: function(Vue) {
    Vue.directive('sync-location', {
      bind(elm, binding, vnode) {
        observer.observe({ elm, vnode })
      }
    })
  }
}
