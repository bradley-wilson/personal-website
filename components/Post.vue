<template>
  <article class="blog-post">
    <div 
      :style="{ backgroundImage: `url(${env.Url + '/' + post.image.path})` }"
      class="blog-post__image"/>
    <h2 class="blog-post__title heading--secondary"> {{ post.title }}</h2>
    <p class="blog-post__excerpt text--description"> {{ post.excerpt }} </p>
    <nuxt-link
      :to="'/blog/' + post.slug"
      class="blog-post__link button button--bar"> Read more </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: function() {
        return { message: 'Initiated' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-post {
  width: 100%;
  margin: 1.5rem;
  background: #04263e;
  position: relative;
  border-radius: 0.4rem;

  @include screen(tablet) {
    width: 45.3%;
  }

  @include screen(desktop) {
    width: 29%;
  }

  &__image {
    height: 200px;
    background-size: cover;
    background-position: center;
    border-top-right-radius: 0.4rem;
    border-top-left-radius: 0.4rem;
    margin-bottom: 0.8rem;
  }

  &__title {
    padding: 0.5rem 1rem;
    margin: 0;
  }

  &__excerpt {
    margin-bottom: 7.2rem;
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    line-height: 1.4;
  }

  &__link {
    position: absolute;
    bottom: 0;
    padding: 1.8rem !important;
  }
}
</style>
