<template>
  <div class="wrapper">
    <h2>Posts by {{ selectedUser.name }}</h2>
    <div class="posts">
      <PostsItem v-for="post in contentState" :key="post.id" :thisPost="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostsItem from "./PostsItem.vue";

export default {
  name: "ThePosts",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    PostsItem,
  },
  methods: {
    ...mapActions(["getUsersContent"]),
  },
  computed: {
    ...mapGetters(["contentState", "selectedUser"]),
  },
  async mounted() {
    await this.getUsersContent({ id: this.id, posts: "posts" });
  },
};
</script>

<style lang="scss">
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  gap: 2%;
  padding: 3% 1% 0 1%;
}

@media (max-width: 426px) {
  .posts {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
