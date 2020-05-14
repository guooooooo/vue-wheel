<template>
  <button class="w-button"><slot></slot></button>
</template>
<script>
  export default {
    name: 'wheel-button'
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
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
  }
</style>