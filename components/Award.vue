<template>
  <div class="award">
    <img
      src="img/laurel.svg"
      alt="Laurel icon"
      class="award__icon">
    <div class="award__title heading--tertiary"> {{ award.title }} </div>
    <div class="award__description text--description"> {{ award.description }} </div>
  </div>
</template>

<script>
export default {
  props: {
    award: {
      type: Object,
      default: function() {
        return { message: 'initiated' }
      }
    }
  }
}
</script>

<style lang="scss">
.award {
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
}
</style>
