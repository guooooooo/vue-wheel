import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)

new Vue({
  el: '#app',
  data: {
    loading: true
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
