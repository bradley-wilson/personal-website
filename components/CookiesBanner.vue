<template>
  <div
    id="cookies--banner"
    class="cookies--banner"
  >
    <p>By using this website you agree to our <a href="/cookie-policy">cookie policy</a></p>
    <button
      class="button button--primary"
      @click="closeCookies"
    >
      Accept
    </button>
  </div>
</template>

<script>
export default {
  mounted: function () {
    let banner = document.getElementById('cookies--banner')

    if (localStorage.getItem('cookieSeen') != 'shown') {
      banner.style.display = 'flex'
      localStorage.setItem('cookieSeen', 'shown')
    }
  },
  methods: {
    closeCookies: function() {
      let banner = document.getElementById('cookies--banner')
      banner.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.cookies {
  &--banner {
    position: fixed;
    top: 40px;
    left: 10%;
    right: 10%;
    width: 80%;
    padding: 2rem 4rem;
    display: none;
    align-items: center;
    justify-content: space-between;
    background-color: $light-blue;
    border-radius: 5px;
    z-index: 100;
    flex-direction: column;
    box-shadow: 0 0 3rem rgba(0,0,0,0.5);

    @include screen(tablet) {
      flex-direction: row;
    }

    p {
      margin-bottom: 2rem;

      @include screen(tablet) {
        margin-bottom: 0;
      }
    }
  }

  &--button {
    padding: 0.5rem 1rem;
    background-color: $color-secondary;
    border-radius: 5px;
  }
}
</style>
