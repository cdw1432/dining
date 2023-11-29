<script>
import axios from 'axios'
  export default {
    
    data() {
    return {
      dataFromServer : null,
      selectedDate: null,
      groupedByStation: null
    };
  },created() {
    axios
        .get('http://localhost:3000/v1/api/date')
        .then((response) => {
          this.selectedDate = response.data
          console.log(response.data);
        })
      this.getDataFromServer();
    },
    methods: {
      groupDataByStation() {
      this.groupedByStation = this.dataFromServer.reduce((acc, item) => {
        const { station } = item;
        if (!acc[station]) {
          acc[station] = [];
        }
        acc[station].push(item);
        return acc;
      }, {});
    },
      getDataFromServer() {
        axios.get('http://localhost:3000/v1/meal/carrillo')
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
    },
    watch: {
    dataFromServer() {
      this.groupDataByStation();
    },
  },
  }
</script>
<template>
    <div class="carrillo">
      <a id="sel">{{ selectedDate }}</a>
      <h1>This is a carrillo page</h1>
      <div v-if="groupedByStation">
      <div v-for="(items, station) in groupedByStation" :key="station" class="station-container">
        <h2>{{ station }}</h2>
        <ul>
          <li v-for="(item, index) in items" :key="index" class="food-item">
            <img id="imgpic" :src="item.url" :alt="item.food">
            <a id="food">{{ item.food }}</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </template>
  
  <style>
  /* @media (min-width: 1024px) {
    .carrillo {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  #sel {
    background-color: hsla(0, 0%, 95%, 0.2);
    font-size: 30px;
  }
  .food-item {
  display: flex;
  align-items: center;
}

#imgpic {
  margin-right: 10px; 
}

#food {
  font-size: 30px;
  margin: 10px;
}
  </style>
  