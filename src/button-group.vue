<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wheel-button-group',
  mounted() {
    for (const node of this.$el.children) {
      const name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`w-button-group 内应为 w-button，当前为 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss">
  .w-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .w-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>