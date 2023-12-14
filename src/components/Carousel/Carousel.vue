<template>
  <div class="carousel">
    <div
      class="carousel__item"
      :style="{ 'margin-left': '-' + 100 * currentIndex + '%' }">
      <CarouselItem v-for="photo in photos" :key="photo.id" :photo="photo" />
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";

export default {
  name: "TheCarousel",
  components: {
    CarouselItem,
  },
  props: {
    photos: {
      type: Array,
      default() {
        return [];
      },
    },
    intervalCarousel: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    nexSlide() {
      if (this.currentIndex >= this.photos.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      console.log(this.currentIndex);
    },
  },
  mounted() {
    if (this.intervalCarousel > 0) {
      let newContext = this;
      setInterval(function () {
        newContext.nexSlide();
      }, newContext.intervalCarousel);
    }
  },
};
</script>

<style lang="scss">
.carousel {
  max-width: 150px;
  overflow: hidden;
  transition: all 2s;
  &__item {
    display: flex;
  }
}
</style>
