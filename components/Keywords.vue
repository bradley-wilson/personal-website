<template>
  <div class="carousel">
    <div class="carousel__content">
      <div
ref="carousel"
class="carousel__track">
        <strong v-for="search in searches" ref="searches" :key="search.index">
          {{ search }}
        </strong>
        <strong v-for="search in searches" ref="searches" :key="search.index">
          {{ search }}
        </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searches: {
      type: Array,
      default: function () {
        return { message: 'hello' }
      },
    },
  },
  mounted: function () {
    this.moveSlider()
    setInterval(this.moveSlider, 80050)
  },
  methods: {
    moveSlider: function () {
      this.$refs.carousel.style.transition = 'transform 80s linear'
      this.$refs.carousel.style.transform = 'translateX(-50%)'
      // this.resetSlider()
      setTimeout(this.resetSlider, 80000)
      // clearTimeout()
    },
    resetSlider: function () {
      this.$refs.carousel.style.transition = 'transform 0s linear'
      this.$refs.carousel.style.transform = 'translateX(0%)'
    },
  },
}
</script>

<style scoped lang="scss">
.carousel {
  font-family: 'Ledsitex';
  font-size: 4.2rem;
  color: #2597f5;

  &__content {
    overflow-x: hidden;
    width: 100vw;
    background-color: $black;
    padding: 0.5rem 0;
    position: absolute;
    left: 0;
    margin: 2.5rem 0;
  }

  &__track {
    width: max-content;
    transform: translateX(0%);
    transition: transform 80s linear;
  }

  strong {
    margin: 0 1.5rem;
  }
}
</style>
