<template>
  <div class="container">
    <div
      v-for="bio in bios"
      :key="bio.id"
      class="bio"> 
      <div
        :style="{backgroundImage: `url(${bio.image.path})`}"
        class="bio__image"/>
      <h2 class="bio__name"> {{ bio.name }} </h2>
      <p class="bio__description"> {{ bio.bio }} </p>
    </div> 
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, env }) {
    let biosRes = await $axios.$get(env.biosUrl)
    return {
      bios: biosRes.entries
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.bio {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @include screen(tablet) {
    flex: 0 1 49%;
  }

  &__image {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }

  &__name {
    margin: 2rem 0;
  }
}
</style>
