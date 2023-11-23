<template>
    <div class="loading-overlay" v-if="isLoading">
      <img src="../assets/img/loading.gif">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true,
      };
    },
    methods: {
      loadMore() {
        this.isLoading = false;
      },
    },
    mounted() {
      this.loadMore();
    },
  };
  </script>

  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  </style>