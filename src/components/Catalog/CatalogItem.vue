<template>
  <div class="item">
    <h2>Name: {{ thisUser.name }}</h2>
    <div class="item__contacts">
      <h2>Contacts</h2>
      <p>
        Email: <a href="mailto:#">{{ thisUser.email }}</a>
      </p>
      <p>
        phone:
        <a href="tel:#">{{ thisUser.phone }}</a>
      </p>
      <p>
        website:
        <a href="http://#"> {{ thisUser.website }}</a>
      </p>
      <div class="item__box">
        <button class="item__box-button" @click="handleClickUserAlbums">
          К альбомам
        </button>
        <button class="item__box-button" @click="handleClickUserPosts">
          К постам
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CatalogItem",
  data() {
    return {
      content: "",
    };
  },
  props: {
    thisUser: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(["getUserInfo", "getChangeUserContent"]),
    handleClickUserPosts() {
      this.$router.push(`/user/${this.thisUser.id}`);
      this.getUserInfo(this.thisUser);
      this.getChangeUserContent(false);
    },
    handleClickUserAlbums() {
      this.$router.push(`/user/${this.thisUser.id}`);
      this.getUserInfo(this.thisUser);
      this.getChangeUserContent(true);
    },
  },
  computed: {
    ...mapGetters(["selectedUserContent"]),
  },
};
</script>

<style lang="scss">
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    &-button {
      width: 30%;
      border: 2px solid #555555;
      border-radius: 10px;
      padding: 3%;
      background-color: #000;
      color: #fff;
    }
  }
}
</style>
