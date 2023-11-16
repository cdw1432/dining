<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataFromExample: null,
      dataFromServer: null,
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/data')
      .then(response => {
          this.dataFromServer = response.data;
          console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    axios.post('http://localhost:3000/api/data', { data: 'from vue app' })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });

    axios.get('http://localhost:3000/v1/example')
      .then(response => {
          this.dataFromExample = response.data;
          console.log(response.data.message);
        

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
</script>

<template>
  <h1>This is a Home page</h1>
  <p id="exampleapi">{{ dataFromExample }}</p>
</template>
