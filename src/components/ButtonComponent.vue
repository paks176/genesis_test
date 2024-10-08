<template>
  <button :disabled="getSelectedAction === 'empty'" class="ms-3">Создать</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ButtonComponent",
  computed: {
    ...mapGetters(["getSelectedAction"]),
  }
}
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
  transition: all 0.3s ease;
  &[disabled] {
    pointer-events: none;
    background-color: $disabledGreyBackground;
    border: 1px solid $disabledBorderColor;
    color: #282727;
  }
}
</style>
