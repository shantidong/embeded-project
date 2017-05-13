
<style lang="less">

  .time-wrap {
    text-align: center;
  }
  .mu-time-picker, .mu-text-field {
    width: 80px;
  }
  .mu-checkbox {
    top: 5px;
  }
  .radio-wrap {
    width: 108px;
    margin: 0 auto;
  }
  .label {
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
  }

</style>


<template>
  <section id="alarm">
    <img src="img/moon.png">
    <div class="time-wrap">
      <mu-time-picker label="Set alarm" okLabel="ok" cancelLabel="cancel" v-model="wakeTime"/>
      <mu-checkbox class="demo-checkbox" uncheckIcon="alarm_off" checkedIcon="alarm_on" v-model="enable"/>
    </div>

    <div class="radio-wrap">
      <div class="label">Clear alarm type</div>
      <mu-radio label="easy" @change="open('easy')" name="group" nativeValue="easy" v-model="clearAlarmType" class="demo-radio"/> <br/>
      <mu-radio label="hard" @change="open('hard')" name="group" nativeValue="hard" v-model="clearAlarmType"  class="demo-radio"/>

      <mu-dialog :open="dialog" title="How to clear alarm">
        {{ clearAlarmText }}
        <mu-flat-button label="ok" slot="actions" primary @click="close"/>
      </mu-dialog>
    </div>
  </section>
</template>


<script>

export default {
  data() {
    return {
      wakeTime: '9:00 am',
      clearAlarmType: 'easy',
      clearAlarmText: 'easy',
      enable: false,
      dialog: false,
    }
  },

  methods: {
    open(type) {
      this.clearAlarmText = (type == 'easy')
        ? 'Push button'
        : 'Turn rotary'
      this.dialog = true
    },
    close() {
      this.dialog = false
    }
  }
}

</script>
