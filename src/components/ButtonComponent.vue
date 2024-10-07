<template>
  <button disabled class="me-3">Создать</button>
</template>

<script>

</script>

<style scoped lang="scss">
@import "@/assets/global-styles.scss";
button {
  font-weight: 600;
  border-radius: 5px;
  background-color: $mainColor;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: 1px solid $borderColor;
  &[disabled] {
    pointer-events: none;
    background-color: $disabledGreyBackground;
    border: 1px solid $disabledBorderColor;
    color: #282727;
  }
}
</style>
