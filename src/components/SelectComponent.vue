<template>
  <select
      class="form-select form-select-lg"
      name="entity-select"
      v-model="localSelected"
  >
    <option selected value="empty">Не выбрано</option>
    <option v-for="(value, key) in options" :key="key" :value="key">{{ value }}</option>/
  </select>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "SelectComponent",
  props: {
    options: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      localSelected: "empty",
    }
  },
  methods: {
    ...mapActions(["setAction"]),
  },
  watch: {
    localSelected(value) {
      this.setAction(value);
    }
  },
  mounted() {
    this.setAction("empty");
  }
}
</script>


<style scoped>

</style>
