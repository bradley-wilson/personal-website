<template>
  <section class="announcement-bar">
    <div class="container">
      <p class="announcement-bar__text">Check out our latest blog post!</p>
      <a
        class="announcement-bar__link"
        href="#">Click here.</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.announcement-bar {
  text-align: center;
  background-color: $color-primary;
  position: relative;
  z-index: 10;

  &__text {
    display: inline;
    margin: 0.2rem;
    font-size: 1.6rem;

    @include screen(tablet) {
      font-size: 2rem;
    }
  }

  &__link {
    font-size: 1.6rem;
    border: none;
    background: $color-secondary;
    padding: 0.7rem;
    border-radius: 0.4rem;
    display: block;
    max-width: 10rem;
    margin: 1rem auto;

    &:hover {
      color: white;
    }
  }
}
</style>
