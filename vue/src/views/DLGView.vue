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
        axios.get('http://localhost:3000/v1/meal/dlg')
        .then(response => {
          this.dataFromServer = response.data;
          if(this.dataFromServer.length == 0)
              this.dataFromServer = "dinner not served"
          console.log(this.dataFromServer);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      }
    }
  }
</script>

<template>
  <div class="dlg">
    <h1>This is a dlg page</h1>
    <pre>{{ JSON.stringify(dataFromServer, null, 2) }}</pre>
  </div>

</template>

<style>
/* @media (min-width: 1024px) {
  .dlg {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
