<template>
  <div class="catalog">
    <CatalogItem
      v-for="user in filterProduct"
      :key="user.id"
      :thisUser="user" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CatalogItem from "./CatalogItem.vue";

export default {
  name: "TheCatalog",
  components: {
    CatalogItem,
  },
  methods: {
    ...mapActions(["getUsers", "getSearchName"]),
  },
  computed: {
    ...mapGetters(["usersState", "searchByName"]),
    filterProduct() {
      return this.usersState.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.searchByName.toLowerCase());
      });
    },
  },
  async mounted() {
    await this.getUsers();
  },
};
</script>

<style lang="scss">
.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  gap: 2%;
  padding: 3% 1% 0 1%;
}

@media (max-width: 426px) {
  .catalog {
    display: flex;
    flex-direction: column;
  }
}
</style>
