<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wheel-layout',
  mounted() {
    this.$children.forEach(child => {
      if (child.$options.name === 'wheel-sider') {
        this.layoutClass.hasSider = true
      }
    })
  },
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>