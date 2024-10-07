<template>
  <div class="app__container">
    <div id="app">
      <div class="d-flex align-items-center justify-content-between">
        <ButtonComponent/>
        <SelectComponent :options="selectOptions"/>
      </div>

    </div>
  </div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent.vue';
import SelectComponent from './components/SelectComponent.vue';

export default {
  name: 'App',
  components: {
    ButtonComponent,
    SelectComponent,
  },
  data() {
    return {
      selectOptions: {
        lead: 'Сделка',
        contact: 'Контакт',
        company: 'Компания',
      },
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/global-styles.scss";
body {
  margin: 0;
}
.app {
  &__container {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
#app {
  min-width: 425px;
  min-height: 600px;
  padding: 1.5rem;
  border-radius: 24px;
  box-shadow: 0 5px 5px 3px rgba(34, 60, 80, 0.2);
}
</style>
