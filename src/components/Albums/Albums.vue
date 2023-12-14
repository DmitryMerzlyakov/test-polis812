<template>
  <div>
    <h2>Albums by {{ selectedUser.name }}</h2>
    <div class="albums">
      <AlbumsItem
        v-for="album in contentState"
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
    ...mapActions(["getUsersContent"]),
  },
  computed: {
    ...mapGetters(["contentState", "selectedUser"]),
  },
  async mounted() {
    await this.getUsersContent({ id: this.id, posts: "albums" });
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
