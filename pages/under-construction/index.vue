<template>
  <div class="construction__container">
    <div class="construction__message">
      <img
        src="/img/warning-white.svg"
        alt="Warning icon"
        class="construction__icon"
      >
      This page is under construction. Come back soon for more info!
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>

<style lang="scss">
.construction {
  &__container {
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__message {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    flex-direction: column;
    padding: 2rem;

    @include screen(tablet) {
      flex-direction: row;
    }
  }

  &__icon {
    width: 6.4rem;
  }
} 
</style>
