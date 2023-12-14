import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    users: [],
    content: [],
    photos: [],
    user: {},
    searchName: "",
  },
  mutations: {
    getUsersFromApi: (state, users) => {
      state.users = users;
    },
    getUserContentFromApi: (state, content) => {
      state.content = content;
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
    getUsersContent({ commit }, body) {
      return axios(
        `https://jsonplaceholder.typicode.com/${body.posts}?userId=${body.id}`,
        {
          method: "GET",
        },
      ).then((content) => {
        commit("getUserContentFromApi", content.data);
        return content.data;
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
    getSearchName({ commit }, value) {
      commit("searchByName", value);
    },
    getUserInfo({ commit }, user) {
      commit("selectedUser", user);
      return user;
    },
  },
  getters: {
    usersState(state) {
      return state.users;
    },
    contentState(state) {
      return state.content;
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
  },
});

export default store;
