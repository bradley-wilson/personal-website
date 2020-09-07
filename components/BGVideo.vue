<template>
  <div class="bg-video">
    <video
      :poster="posterSrc"
      autoplay
      muted
      loop
      playsinline
      webkit-playsinline
      class="bg-video__content"
    >
      <source :src="mp4Src" type="video/mp4" />
      <source
      :src="webmSrc"
      type="video/webm"
      />
    </video>
  </div>
</template>

<script>
export default {
  props: {
    posterSrc: {
      type: String,
      default: 'none',
    },
    mp4Src: {
      type: String,
      default: 'none',
    },
    webmSrc: {
      type: String,
      default: 'none',
    },
  },
}
</script>

<style lang="scss" scoped>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -10;
  opacity: 0.65;

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
