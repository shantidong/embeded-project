
<template>
  <section id="security">
    <mu-list>
      <mu-list-item v-for="log in logs" :title="log.text">
        <span slot="describe">{{ log.date }}</span>
      </mu-list-item>
    </mu-list>
  </section>
</template>


<script>

export default {
  data() {
    return {
      logs: [
        { text: 'Fire!!', date: '2017-05-14' },
        { text: 'Door open', date: '2017-05-13' },
        { text: 'Door close', date: '2017-05-12' },
        { text: 'Fire!!', date: '2017-05-11' },
        { text: 'Door open', date: '2017-05-10' },
      ]
    }
  },
}

</script>
