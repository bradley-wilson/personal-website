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
  mounted: function() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.carousel {

  &__content {
  }

  &__track {
  }
}
</style>
