import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)


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
