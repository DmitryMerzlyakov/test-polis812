<template>
  <div>
    <h2>Albums by {{ selectedUser.name }}</h2>
    <div class="albums">
      <AlbumsItem
        v-for="album in albumsState"
        :key="album.id"
        :thisAlbum="album" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AlbumsItem from "./AlbumsItem.vue";

export default {
  name: "TheAlbums",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    AlbumsItem,
  },
  methods: {
    ...mapActions(["getUserAlbums"]),
  },
  computed: {
    ...mapGetters(["albumsState", "selectedUser"]),
  },
  async mounted() {
    await this.getUserAlbums(this.id);
  },
};
</script>

<style lang="scss">
.albums {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  gap: 2%;
  padding: 3% 1% 0 1%;
}

@media (max-width: 426px) {
  .albums {
    display: flex;
    flex-direction: column;
  }
}
</style>
