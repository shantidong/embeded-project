
<style lang="less">
  .container {
    width: 100%;
  }

  nav {
    width: 100%;
    position: fixed;
    bottom: 0px;
  }

  section {
    max-width: 500px;
    position: absolute;
    padding: 20px;
    left: 50%;
    margin-left: -250px;
  }

  @media screen and (max-width: 480px) {
    section {
      width: 100%;
      position: absolute;
      padding: 20px;
      left: 0px;
      margin-left: 0px;
    }
  }

  img {
    width: 80%;
    margin: 10%;
  }

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity, padding-top;
    transition-duration: .3s, .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    padding-top: 10px;
  }
</style>


<template>
  <div class="container">
    <transition name="fade">
      <section-alarm v-if="bottomNav == 'Alarm'"/>
    </transition>

    <transition name="fade">
      <section-sleep v-if="bottomNav == 'Sleep'"/>
    </transition>

    <transition name="fade">
      <section-security v-if="bottomNav == 'Security'"/>
    </transition>

    <nav>
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="Alarm" title="Alarm" icon="alarm"/>
          <mu-bottom-nav-item value="Sleep" title="Sleep" icon="brightness_2"/>
          <mu-bottom-nav-item value="Security" title="Security" icon="lock"/>
        </mu-bottom-nav>
      </mu-paper>
    </nav>
  </div>
</template>


<script>

export default {
  components: {
    'section-alarm': require('./alarm.vue'),
    'section-sleep': require('./sleep.vue'),
    'section-security': require('./security.vue'),
  },

  data() {
    return {
      bottomNav: 'Alarm',
    }
  },

  methods: {
    handleChange(val) {
      this.bottomNav = val
    }
  }
}

</script>
