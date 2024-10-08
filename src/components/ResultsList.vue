<template>
<div class="result-list p-3 flex-grow-1">
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ResultsList",
  computed: {
    ...mapGetters["getResults"],
  }
}
</script>

<style scoped lang="scss">
  .result {
    &-list {
      border-radius: 20px;
      box-shadow: 0 2px 8px 0 rgba(34, 60, 80, 0.2) inset;
    }
  }
</style>
