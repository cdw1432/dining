<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataFromExample: null,
      dataFromServer: null,
      dataFromDB: null,
    };
  },
  mounted() {
        // axios.get('http://localhost:3000/v1/example')
    //   .then(response => {
    //       this.dataFromExample = response.data.message;
    //       console.log(this.dataFromExample);
        

    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    // axios.get('http://localhost:3000/api/data')
    //   .then(response => {
    //       this.dataFromServer = response.data;
    //       console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });

    // axios.post('http://localhost:3000/api/data', { data: 'message from vue app' })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error posting data:', error);
    //   });
      axios.get('http://localhost:3000/v1/meal')
      .then(response => {
        this.dataFromDB = JSON.stringify(response.data, null, '\t')
        console.log( this.dataFromDB );
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
</script>

<template>
  <h1>This is a Home page</h1>
  <pre id="exampleapi">{{ dataFromDB }}</pre>
</template>
