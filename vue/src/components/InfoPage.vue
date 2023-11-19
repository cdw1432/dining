<script>
import axios from 'axios'
export default {
  data() {
    return {
      today: new Date(),
      tomorrow: new Date(),
      dayAfterTomorrow: new Date(),
      selectedDate: 'TODAY',
      selectedNum : 1
    };
  },
  created() {
    // Set dates for tomorrow and the day after tomorrow
    this.tomorrow.setDate(this.today.getDate() + 1);
    this.dayAfterTomorrow.setDate(this.today.getDate() + 2);
    this.selectedDate = 'TODAY ' + this.formatDate(this.today)
    
    this.sendSelectedDateToServer(this.today.toISOString().split('T')[0])
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      });
    },
    selectDate(date, format) {
      this.selectedDate = date;
      this.sendSelectedDateToServer(new Date(format).toISOString().split('T')[0])
    },
    sendSelectedDateToServer(date) {
      axios
        .post('http://localhost:3000/api/data', { data: date })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error posting data:', error);
        });
    },
  }
};
</script>

<template>
  <div>
    <h1>Dinner Menu for</h1>
    <h2 >selected date: <a class="date">{{ selectedDate }}</a></h2>
    <div>
      <a @click="selectDate(`TODAY ${formatDate(today)}`, `${today}`)" :class="{ 'selected': selectedNum === 1 }">TODAY, {{ formatDate(today) }}</a>
    </div>

    <div>
      <a @click="selectDate(`TMRW ${formatDate(tomorrow)}`,`${tomorrow}`)" :class="{ 'selected': selectedNum === 2 }" >TMRW, {{ formatDate(tomorrow) }}</a>
    </div>

    <div>
      <a @click="selectDate(`TAT ${formatDate(dayAfterTomorrow)}`,` ${dayAfterTomorrow}`)" :class="{ 'selected': selectedNum === 3 }">TAT, {{ formatDate(dayAfterTomorrow) }}</a>
    </div>
  </div>
</template>

<style scoped>
.selected {
  background-color: hsla(160, 100%, 37%, 0.2);
  cursor: pointer;
  user-select: none;
}
.selected:hover {
  cursor: auto;
}
.date {
  background-color: hsla(0, 0%, 95%, 0.2);
  color: rgb(221, 221, 221);
}
</style>