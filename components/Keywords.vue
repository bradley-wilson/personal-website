<template>
  <div class="carousel">
    <div class="carousel__content">
      <div
        ref="carousel"
        class="carousel__track">
        <strong
          v-for="search in searches"
          ref="searches"
          :key="search.index"
        >
          {{ search.keyword }}
        </strong>
        <strong
          v-for="search in searches"
          ref="searches"
          :key="search.index"
        >
          {{ search.keyword }}
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
      default: function() {
        return { message: 'hello' }
      }
    }
  },
  mounted: function() {
    this.moveSlider()
    setInterval(this.moveSlider, 40000)
  },
  methods: {
    moveSlider: function() {
      this.$refs.carousel.style.transition = 'transform 40s linear'
      this.$refs.carousel.style.transform = 'translateX(-50%)'
      this.resetSlider()
      // setTimeout(this.resetSlider, 40000)
    },
    resetSlider: function() {
      this.$refs.carousel.style.transition = 'transform 0s linear'
      this.$refs.carousel.style.transform = 'translateX(0%)'
    }
  }
}
</script>

<style scoped lang="scss">
.carousel {

  &__content {
    overflow-x: hidden;
    width: 100vw;
  }

  &__track {
    width: max-content;
    transform: translateX(0%);
    transition: transform 40s linear;
  }
}
</style>
