<template>
  <div class="container">
    <h2>Current Team</h2>
    <div v-for="bio in bios" v-if="bio.current" :key="bio.id" class="bio">
      <div
        :style="{
          backgroundImage: `url(https://bradwilsonphd.com/${bio.image.path})`,
        }"
        class="bio__image"
      />
      <h2 class="bio__name">
        {{ bio.name }}
      </h2>
      <p class="bio__description">
        {{ bio.bio }}
      </p>
    </div>
    <h2>Esteemed Alumni</h2>
    <div v-for="bio in bios" v-if="!bio.current" :key="bio.id" class="bio">
      <div
        :style="{
          backgroundImage: `url(https://bradwilsonphd.com/${bio.image.path})`,
        }"
        class="bio__image"
      />
      <h2 class="bio__name">
        {{ bio.name }}
      </h2>
      <p class="bio__description">
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, env }) {
    let biosRes = await $axios.$get(env.biosUrl)
    return {
      bios: biosRes.entries,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
h2 {
  width: 100%;
  text-align: center;
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
