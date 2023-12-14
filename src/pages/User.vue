<template>
  <div>
    <TheAlbums v-if="this.selectedUserContent == true" />
    <ThePosts v-if="this.selectedUserContent == false" />
  </div>
</template>

<script>
import TheAlbums from "../components/Albums/Albums.vue";
import ThePosts from "../components/Posts/Posts.vue";
import { mapGetters } from "vuex";

export default {
  name: "TheUser",
  components: {
    TheAlbums,
    ThePosts,
  },
  computed: {
    ...mapGetters(["selectedUserContent"]),
  },
};
</script>

<style></style>
