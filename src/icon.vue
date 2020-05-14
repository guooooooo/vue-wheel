<template>
  <svg class="w-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
export default {
  name: "w-icon",
  props: ["name"]
};
</script>

<style lang="scss">
.w-icon {
  width: 1em;
  height: 1em;
}
</style>