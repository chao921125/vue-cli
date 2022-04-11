<template>
  <view>{{ hourString+':'+minuteString+':'+secondString }}</view>
</template>

<script>
export default {
  name: 'Timer',
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
      hour: '',
      minute: '',
      second: '',
      promiseTimer: '',
      remainTimes: 10000
    };
  },
  computed: {
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
      this.hour = Math.floor((this.remainTimes / 3600));
      this.minute = Math.floor((this.remainTimes / 60) % 60);
      this.second = Math.floor(this.remainTimes % 60);
      this.countDowm();
    }
    // var startDate = new Date();
    // var endDate = new Date();
    // endDate.setMonth(endDate.getMonth() + 1);
    // alert(this.getIntervalHour(startDate, endDate));
  },
  methods: {
    getIntervalHour(startDate, endDate) {
      var ms = endDate.getTime() - startDate.getTime();
      if (ms < 0) return 0;
      return Math.floor(ms / 1000 / 60 / 60);
    },
    countDowm() {
      let self = this;
      clearInterval(this.promiseTimer);
      this.promiseTimer = setInterval(function() {
        if (self.hour === 0) {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.second = 0;
            self.$emit('countDowmEnd', true);
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
      return num < 10 ? '0' + num : '' + num;
    }
  }
};
</script>

<style scoped>

</style>
