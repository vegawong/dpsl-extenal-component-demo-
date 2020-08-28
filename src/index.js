// Import vue component
import Component from './dpsl-extenal-component-demo.vue'
import widgetConfig from './widgetsConfig'

// `Vue.use` automatically prevents you from using
// the same plugin more than once,
// so calling it multiple times on the same plugin
// will install the plugin only once
Component.install = Vue => {
  Vue.component(Component.name, Component)
}

export default {
  Component,
  install(Vue) {
    Vue.component(Component.name, Component)
  },
  widgets: widgetConfig
}
