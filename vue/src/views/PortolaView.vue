<script>
import axios from 'axios'
  export default {
    data() {
    return {
      dataFromServer : null,
      selectedDate: null,
      groupedByStation: null,
      isImageExpanded: [],
    };
  },
    created() {
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
      this.isImageExpanded = Array.from({ length: this.groupedByStation.length * 17 }, () => false);
    },
      getDataFromServer() {
        axios.get('http://localhost:3000/v1/meal/portola')
        .then(response => {
          this.dataFromServer = response.data;
          if(this.dataFromServer.length == 0)
              this.dataFromServer = "dinner not served"
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      },
      toggleImageSize(stationIndex, itemIndex) {
      const index = stationIndex * 17 + itemIndex;
      this.isImageExpanded[index] = !this.isImageExpanded[index]
    },
    },
    watch: {
    dataFromServer() {
      this.groupDataByStation();
    },
  },
  }
</script>

<template>
  <div class="portola">
    <h1>Portola: <a id="sel">{{ selectedDate }}</a></h1>
    <div v-for="(items, station, sindex) in groupedByStation" :key="station" class="station-container">
        <a :href="'#span'+sindex" id="chapters">*{{ station }}</a>
    </div>
    <div v-if="groupedByStation">
      <div v-for="(items, station, sindex) in groupedByStation" :key="station" class="station-container">
        <h2 id="station"><span :id="'span'+index">***{{ station }}***</span></h2>
        <ul>
          <li v-for="(item, index) in items" :key="index" class="food-item">
            <img
              @click="toggleImageSize(sindex, index)"
              id="imgpic"
              :src="item.url"
              :alt="item.food"
              :style="{ width: isImageExpanded[sindex * 17 + index] ? '47%' : '17%' }"
            />
            <a :href="'http://www.google.com/search?q=' + item.food" id="food">{{ item.food }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
#sel {
    background-color: hsla(0, 0%, 95%, 0.2);
    font-size: 25px;
  }
  .food-item {
  display: flex;
  align-items: center;
}

#imgpic {
  margin-right: 10px; 
  transition: width 0.3s ease
}

#food {
  font-size: 20px;
  margin: 10px;
  color: rgb(0, 146, 97);
}
#station {
  color:  hsla(160, 100%, 37%, 1);
  text-align: center;
}
</style>
  