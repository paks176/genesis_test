<template>
  <select class="form-select form-select-lg" name="entity-select">
    <option value="">Не выбрано</option>
  </select>
</template>

<script lang="ts">
export default {
  name: "SelectComponent",
  props: ["entity"],
}
</script>


<style scoped>

</style>
