<template>
  <a
    href="/"
    class="logo">
    <img
      class="logo__content"
      src="/img/brad-wilson-logo-white.svg"
      alt="Brad Wilson logo">
  </a>
</template>

<style lang="scss" scoped>
.logo {
  border-bottom: 0;

  &__content {
    max-width: 4.5rem;
  }

  &--header {
    position: relative;
    z-index: 100;
  }

  &__footer {
    margin-bottom: 3rem !important;
  }
}
</style>
