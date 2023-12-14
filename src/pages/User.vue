<template>
  <div>
    <TheAlbums v-if="thisRoute == '/user/1/albums'" />
    <ThePosts v-if="thisRoute == '/user/1/posts'" />
  </div>
</template>

<script>
import TheAlbums from "../components/Albums/Albums.vue";
import ThePosts from "../components/Posts/Posts.vue";

export default {
  name: "TheUser",
  components: {
    TheAlbums,
    ThePosts,
  },
  computed: {
    thisRoute() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style></style>
