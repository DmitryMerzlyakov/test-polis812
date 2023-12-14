<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      placeholder="Поиск по имени"
      v-model="searchName" />
    <button class="search__button" @click="search(searchName)">Поиск</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TheSearch",
  data() {
    return {
      searchName: "",
    };
  },
  methods: {
    ...mapActions(["getSearchName"]),
    search(value) {
      this.getSearchName(value);
    },
  },
};
</script>

<style lang="scss">
.search {
  display: flex;
  justify-content: space-between;
  gap: 2%;
  padding: 3% 1% 0 1%;

  &__input {
    width: 80%;
    border: 2px solid #555555;
    border-radius: 15px;
    padding: 1%;
  }
  &__button {
    width: 15%;
    border: 2px solid #555555;
    border-radius: 15px;
    padding: 1%;
    background-color: #000;
    color: #fff;
  }
}
</style>
