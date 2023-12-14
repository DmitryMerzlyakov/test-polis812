<template>
  <div class="item">
    <h2>{{ thisPost.title }}</h2>
    <h4>{{ thisPost.body }}</h4>
  </div>
</template>

<script>
export default {
  name: "PostsItem",
  props: {
    thisPost: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss"></style>
