<template>
  <div class="container">
    <div class="blog">
      <section class="posts-view">
        <Post
          v-for="post in posts"
          :key="post.id"
          :post="post"/>
      </section>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  async asyncData({ $axios, env }) {
    let postsRes = await $axios.$get(
      `/cockpit/post?token=${env.token}&sort[_created]=-1`
    )
    return { posts: postsRes.entries }
  },
  components: {
    Post
  }
}
</script>

<style lang="scss" scoped>
.blog {
  padding: $section-padding;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}

.posts-view {
  display: flex;
  flex-flow: row wrap;
}
</style>
