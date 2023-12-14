<template>
  <div class="album">
    <h2>{{ thisAlbum.title }}</h2>
    <TheCarousel :photos="photosState" :intervalCarousel="2000" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheCarousel from "../Carousel/Carousel";

export default {
  name: "AlbumsItem",
  components: {
    TheCarousel,
  },
  props: {
    thisAlbum: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["getUserPhotos"]),
  },
  computed: {
    ...mapGetters(["photosState"]),
  },
  async mounted() {
    await this.getUserPhotos(this.thisAlbum.id);
    console.log(this.photosState);
  },
};
</script>

<style lang="scss">
.album {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  background-color: #fff;
  border-radius: 12px;
  border: none;
  transition: all 2s;
  &:hover {
    cursor: pointer;
    border: 1px solid #000;
    border-top: 1px solid #000;
  }
}
</style>
