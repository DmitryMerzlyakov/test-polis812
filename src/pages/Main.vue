<template>
  <div class="main">
    <TheSearch />
    <TheCatalog />
  </div>
</template>

<script>
import TheSearch from "../components/Search";
import TheCatalog from "../components/Catalog/Catalog.vue";

export default {
  name: "TheMain",
  components: {
    TheSearch,
    TheCatalog,
  },
};
</script>

<style></style>
