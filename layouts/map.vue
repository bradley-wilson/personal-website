<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
// Hard resest
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  -moz-osx-font-smoothing: greyscale;
  -webkit-font-smoothing: antialiased;
}

// General settings
html {
  // Sets base font size to enable rem units as pixels * 0.1
  font-size: base-font(10);
  color: white;
  font-family: $Muli;
}

body {
  box-sizing: border-box;
  background-color: $black;
}

.container {
  max-width: 102.4rem;
  margin: auto;
  padding: 2rem;

  &--narrow {
    @extend .container;
    max-width: 85rem;
  }
}
</style>
