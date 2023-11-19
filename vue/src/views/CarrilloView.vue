<script>
import axios from 'axios'
  export default {
    created() {
      this.getDataFromServer();
    },
    methods: {
      getDataFromServer() {
        axios.get('http://localhost:3000/v1/meal/carrillo')
        .then(response => {
          this.dataFromServer = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      }
    }
  }
</script>
<template>
    <div class="carrillo">
      <h1>This is a carrillo page</h1>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .carrillo {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  