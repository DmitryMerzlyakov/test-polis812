import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    users: [],
    albums: [],
    posts: [],
    photos: [],
    user: {},
    searchName: "",
    userContent: "",
  },
  mutations: {
    getUsersFromApi: (state, users) => {
      state.users = users;
    },
    getUserAlbumsFromApi: (state, albums) => {
      state.albums = albums;
    },
    getUserPostsFromApi: (state, posts) => {
      state.posts = posts;
    },
    getUserPhotosFromApi: (state, photos) => {
      state.photos = photos;
    },
    selectedUser: (state, user) => {
      state.user = user;
    },
    searchByName: (state, value) => {
      state.searchName = value;
    },
    changeUserContent: (state, userContent) => {
      state.userContent = userContent;
    },
  },
  actions: {
    getUsers({ commit }) {
      return axios("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
      }).then((users) => {
        commit("getUsersFromApi", users.data);
        return users.data;
      });
    },
    getUserAlbums({ commit }, id) {
      return axios(`https://jsonplaceholder.typicode.com/albums?userId=${id}`, {
        method: "GET",
      }).then((albums) => {
        commit("getUserAlbumsFromApi", albums.data);
        return albums.data;
      });
    },
    getUserPhotos({ commit }, id) {
      return axios(
        `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
        {
          method: "GET",
        },
      ).then((photos) => {
        commit("getUserPhotosFromApi", photos.data.slice(0, 5));
        return photos.data;
      });
    },
    getUserPosts({ commit }, id) {
      return axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, {
        method: "GET",
      }).then((posts) => {
        commit("getUserPostsFromApi", posts.data);
        return posts.data;
      });
    },
    getSearchName({ commit }, value) {
      commit("searchByName", value);
    },
    getUserInfo({ commit }, user) {
      commit("selectedUser", user);
      return user;
    },
    getChangeUserContent({ commit }, userContent) {
      commit("changeUserContent", userContent);
    },
  },
  getters: {
    usersState(state) {
      return state.users;
    },
    albumsState(state) {
      return state.albums;
    },
    postsState(state) {
      return state.posts;
    },
    photosState(state) {
      return state.photos;
    },
    searchByName(state) {
      return state.searchName;
    },
    selectedUser(state) {
      return state.user;
    },
    selectedUserContent(state) {
      return state.userContent;
    },
  },
});

export default store;
