<template>
  <div class="website-content">
    <CookiesBanner />
    <TheAnnouncementBar v-if="announcementBar" />
    <TheNavbar />
    <div class="wrapper">
      <h1
        class="heading heading--title u-margin-top--big"
        style="text-align: center;"
      >
        Bradley Wilson
      </h1>
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheAnnouncementBar from '@/components/TheAnnouncementBar'
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'
import CookiesBanner from '@/components/CookiesBanner'

export default {
  components: {
    TheAnnouncementBar,
    TheNavbar,
    TheFooter,
    CookiesBanner,
  },
  data() {
    return { announcementBar: '' }
  },
  mounted() {
    this.$axios.$get(`${process.env.barUrl}`).then((res) => {
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
  },
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

.wrapper {
  padding: $section-padding;
  background-color: #061017;
  flex: 1;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}

.website-content {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
