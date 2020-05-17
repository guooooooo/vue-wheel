<template>
  <svg class="w-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
import './icon-svg'
export default {
  name: "wheel-icon",
  props: ["name"]
};
</script>

<style lang="scss">
.w-icon {
  width: 1em;
  height: 1em;
}
</style>