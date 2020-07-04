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
  data() {
    return {
      slideCounter: 1
    }
  },
  mounted: function() {
    this.arrangeSlides()
    this.carouselMoveForward()
  },
  methods: {
    carouselMoveForward: function() {
      this.$refs.carousel.style.transform = 'translateX(' + this.$refs.searches.length + '%)'
      setInterval(this.$refs.carousel.style.transform = 'translateX(0%)', 15000)
      carouselMoveForward()
    },
    arrangeSlides: function() {
      for (let i = 0; i < this.$refs.searches.length; i++) {
        let offset = 100 * i
        this.$refs.searches[i].style.transform = 'translateX(' + offset + '%)'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  height: 15rem;

  &__content {
    // height: 100%;
    overflow: hidden;
    position: relative;
  }

  &__track {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: transform 15s ease 0s;
  }
}
</style>
