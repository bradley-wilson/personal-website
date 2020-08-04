<template>
  <div>
    <TheAnnouncementBar v-if="announcementBar"/>
    <TheNavbar/>
    <nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheAnnouncementBar from '@/components/TheAnnouncementBar'
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheAnnouncementBar,
    TheNavbar,
    TheFooter
  },
  data() {
    return { announcementBar: '' }
  },
  mounted() {
    this.$axios.$get(`${process.env.barUrl}`).then(res => {
      this.announcementBar = res.show
    })
  },
  methods: {
    // scrollToHash: function(target) {
    //   const element = document.querySelector(target)
    //   console.log('scrollToHash')
    //   if (element) {
    //     window.scrollTo(0, element.offsetTop)
    //   }
    // }
  }
  // mounted() {
  // }
}
</script>

<style lang="scss">
// Hard resest
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  -moz-osx-font-smoothing: greyscale;
  -webkit-font-smoothing: antialiased;
}

// General settings
html {
  // Sets base font size to enable rem units as pixels * 0.1
  font-size: base-font(10);
  color: white;
  font-family: $Muli;
}

body {
  box-sizing: border-box;
  background-color: $black;
}

.container {
  max-width: 102.4rem;
  margin: auto;
  padding: 2rem;

  &--narrow {
    @extend .container;
    max-width: 85rem;
  }
}
</style>
