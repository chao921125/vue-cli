<template>
  <text>
    <text v-if="day > 0">{{ dayString + 'd ' + hourString + 'h' }}</text>
    <text v-else-if="hour > 0">{{ hourString + 'h ' + minuteString + 'm' }}</text>
    <text v-else-if="minute > 0">{{ minuteString + 'm ' + secondString + 's' }}</text>
    <text v-else>{{ secondString + 's' }}</text>
  </text>
</template>

<script>
export default {
  name: 'TimeDHMS',
  props: {
    remainTime: {
      type: Number,
      default: 0
    },
    startDate: {
      type: [Date, String],
      default: undefined
    },
    endDate: {
      type: [Date, String],
      default: undefined
    }
  },
  data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      promiseTimer: '',
      remainTimes: 0
    };
  },
  computed: {
    dayString() {
      return this.formatNum(this.day);
    },
    hourString() {
      return this.formatNum(this.hour);
    },
    minuteString() {
      return this.formatNum(this.minute);
    },
    secondString() {
      return this.formatNum(this.second);
    }
  },
  created() {
    if (this.remainTime) {
      this.remainTimes = this.remainTime;
    } else {
      if (this.startDate && this.endDate) {
        this.remainTimes = Math.round((new Date(this.endDate.replace(/-/g, '/')).getTime() - new Date(this.startDate.replace(/-/g, '/')).getTime()) / 1000);
      }
      if (!this.startDate && this.endDate) {
        this.remainTimes = Math.round((new Date(this.endDate.replace(/-/g, '/')).getTime() - new Date().getTime()) / 1000);
      }
    }
  },
  mounted() {
    if (this.remainTimes > 0) {
      this.day = Math.floor(this.remainTimes / 1000 / 60 / 60 / 24);
      this.hour = Math.floor((this.remainTimes / 1000 / 60 / 60) % 24);
      this.minute = Math.floor((this.remainTimes / 1000 / 60) % 60);
      this.second = Math.floor((this.remainTimes / 1000) % 60);
      this.countTime();
    }
  },
  methods: {
    countTime() {
      let self = this;
      clearInterval(this.promiseTimer);
      this.promiseTimer = setInterval(function() {
        if (self.hour === 0) {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.second = 0;
            self.$emit('countTime', true);
            clearInterval(self.promiseTimer);
          } else {
            self.second -= 1;
          }
        } else {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.hour -= 1;
            self.minute = 59;
            self.second = 59;
          } else {
            self.second -= 1;
          }
        }
      }, 1000);
    },
    formatNum(num) {
      return num;
      // return num < 10 && num > 0 ? '0' + num : '' + num;
    }
  }
};
</script>

<style scoped></style>
