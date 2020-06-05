import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-layout', Layout)
Vue.component('w-header', Header)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)
Vue.component('w-sider', Sider)


new Vue({
  el: '#app',
  data: {
    loading: true,
    value: 'input'
  },
  methods: {
    inputChange(e) {
      console.log('change', e.target.value)
    },
    inputInput(e) {
      console.log('input', e.target.value)
    },
    inputFocus(e) {
      console.log('focus', e.target.value)
    },
    inputBlur(e) {
      console.log('blur', e.target.value)
    }
  }
})
