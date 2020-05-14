<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]: iconPosition==='right'}">
    <w-icon class="icon" v-if="icon" :name="icon"></w-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>
import Icon from './icon'
export default {
  name: 'wheel-button',
  components: {'w-icon': Icon},
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: '',
      validator(value) {
        if (value && value !== 'left' && value !== 'right') {
          console.error('iconPosition属性必须为left或者right');
        }
        return true
      }
    }
  }
}
</script>
<style lang="scss">
  .w-button {
    height: var(--button-height);
    padding: 0 1em;
    font: inherit;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex; 
    justify-content: center; 
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    > .content { 
      order: 2;
    }
    > .icon { 
      order: 1; 
      margin-right: .1em; 
    }
    &.icon-right {
      > .content {
        order: 1;
      }
      > .icon { 
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
    }
  }
</style>