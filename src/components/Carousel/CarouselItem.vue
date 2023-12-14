<template>
  <img :src="photo.thumbnailUrl" />
</template>

<script>
export default {
  name: "CarouselItem",
  props: {
    photo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss"></style>
