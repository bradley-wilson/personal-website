<template>
  <div
@mouseover="hover = true"
@mouseleave="hover = false" class="badge">
    <img
      :src="'/img/' + badge.name + '.png'"
      alt="Impact Story Badge"
      class="badge__icon"
    >
    <div class="badge__title heading--tertiary">
      {{ badge.display_name }}
    </div>
    <div v-if="hover" class="badge__description text--description">
      {{ badge.description + ' ' }} <span v-html="badge.context" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    badge: {
      type: Object,
      default: function () {
        return { message: 'initiated' }
      },
    },
  },
  data() {
    return {
      hover: false,
    }
  },
}
</script>

<style lang="scss">
.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @include screen(tablet) {
    flex: 0 1 49%;
  }

  &__icon {
    display: block;
    width: 10rem;
    margin-bottom: 2rem;
  }

  &__title {
    color: white !important;
  }

  &__description {
    background-color: $black;
    padding: 2rem;
    position: absolute;
    max-width: 20rem;
    top: 20rem;
  }
}
</style>
