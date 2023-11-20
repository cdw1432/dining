<script>
import axios from 'axios'
  export default {
    data() {
    return {
      dataFromServer : null
    };
  },
    created() {
      this.getDataFromServer();
    },
    methods: {
      getDataFromServer() {
        axios.get('http://localhost:3000/v1/meal/portola')
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
    <div class="portola">
      <h1>This is a portola page</h1>
      <pre>{{ JSON.stringify(dataFromServer, null, 2) }}</pre>
     
    </div>
  </template>
  
  <style>
  /* @media (min-width: 1024px) {
    .portola {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  </style>
  