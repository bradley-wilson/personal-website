<template>
  <div class="carousel">
    <img
      src="/img/chevron-left.svg"
      class="chevron carousel__chevron-left u-center-y"
      alt="Chevron left"
      @click="carouselMoveBackward">
    <div class="carousel__content">
      <div
        ref="carousel"
        class="carousel__track">
        <div
          v-for="quote in sortedQuotes"
          ref="slides"
          :key="quote.id"
          class="carousel__slide">
          <div class="quote u-center">
            <div class="quote__text subheading"> {{ quote.quote }} </div>
            <div
              v-if="quote.author"
              class="quote__by heading--tertiary"> {{ quote.author }} </div>
            <div
              v-if="quote.country && quote.role"
              class="quote__place text--description"> {{ quote.country }}, {{ quote.role }} </div>
          </div>
        </div>
      </div>
    </div>
    <img
      src="/img/chevron-right.svg"
      class="chevron carousel__chevron-right u-center-y"
      alt="Chevron right"
      @click="carouselMoveForward">
  </div>
</template>

<script>
export default {
  props: {
    quotes: {
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
  computed: {
    sortedQuotes: function() {
      var sorted = []
      for (var i = 0; i < 3; i++) {
        sorted.push(this.quotes[Math.floor(Math.random() * this.quotes.length)])
      }

      return sorted
    }
  },
  mounted: function() {
    this.arrangeSlides()
    setInterval(this.carouselMoveForward, 7000)
  },
  methods: {
    carouselMoveForward: function() {
      let slideOffset = -100 * this.slideCounter
      if (this.slideCounter == this.$refs.slides.length) {
        this.$refs.carousel.style.transform = 'translateX(0%)'
        this.slideCounter = 1
      } else {
        this.$refs.carousel.style.transform = 'translateX(' + slideOffset + '%)'
        this.slideCounter++
      }
    },
    carouselMoveBackward: function() {
      let slideOffset = (this.slideCounter - 2) * -100
      if (this.slideCounter == 1) {
        this.$refs.carousel.style.transform =
          'translateX(' + -100 * (this.$refs.slides.length - 1) + '%)'
        this.slideCounter = this.$refs.slides.length
      } else {
        this.$refs.carousel.style.transform = 'translateX(' + slideOffset + '%)'
        this.slideCounter--
      }
    },
    arrangeSlides: function() {
      for (let i = 0; i < this.$refs.slides.length; i++) {
        let offset = 100 * i
        this.$refs.slides[i].style.transform = 'translateX(' + offset + '%)'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  height: 50vh;

  &__chevron-left {
    left: 0;
    z-index: 1;
  }
  &__chevron-right {
    right: 0;
    z-index: 1;
  }

  &__content {
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  &__track {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: transform 0.5s ease 0s;
  }

  &__slide {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
  }
}
</style>
