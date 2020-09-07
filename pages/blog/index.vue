<template>
  <div class="container">
    <div class="blog">
      <div class="search-box">
        <img src="/img/glass.svg"
alt="Search icon" class="search-box__icon"
/>
        <input
          v-model="searchQuery"
          placeholder="Search"
          class="search-box__input"
        >
      </div>
      <section class="posts-view">
        <Post v-for="post in displayedPosts" :key="post.id" :post="post" />
      </section>
      <div
        v-if="posts[0] == undefined"
        class="text--description label--missing"
      >
        No blog posts to show.
      </div>
      <div class="blog__pagination">
        <img
          v-if="currentPage != 1"
          src="/img/chevron-left.svg"
          class="chevron chevron-left"
          alt="Chevron left"
          @click="
            currentPage--
            scrollToTop()
          "
        >
        <div class="pagination__text text--description">
          Page {{ currentPage }} of {{ pages }}
        </div>
        <img
          v-if="currentPage < pages && pages > currentPage"
          src="/img/chevron-right.svg"
          class="chevron chevron-right"
          alt="Chevron left"
          @click="
            currentPage++
            scrollToTop()
          "
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  components: {
    Post,
  },
  async asyncData({ $axios, env }) {
    let postsRes = await $axios.$get(
      `${env.postsUrl}&filter[published]=true&sort[_created]=-1`
    )
    return { posts: postsRes.entries }
  },
  data() {
    return {
      perPage: 9,
      currentPage: 1,
      searchQuery: '',
    }
  },
  computed: {
    pages: function () {
      return Math.ceil(this.posts.length / this.perPage)
    },
    displayedPosts: function () {
      let posts = this.searchResults ? this.searchResults : this.posts
      let postEnd = this.currentPage * this.perPage
      let postStart = postEnd - this.perPage
      return posts.slice(postStart, postEnd)
    },
    searchResults: function () {
      let results = []
      let posts = this.posts
      let search = new RegExp(`${this.searchQuery.replace(/ /gi, '|')}`, 'ig')
      for (let i = 0; i < posts.length; i++) {
        let post = posts[i]
        let tags = ''
        for (let u = 0; u < post.tags.length; u++) {
          tags += post.tags[u]
        }
        if (
          post.title.match(search) ||
          post.content.match(search) ||
          post.excerpt.match(search) ||
          tags.match(search)
        ) {
          results.push(post)
        }
      }
      return results
    },
  },
  methods: {
    scrollToTop: function () {
      console.log('Called')
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.blog {
  &__pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * {
      margin: 8rem 1.5rem 0 1.5rem;
    }
  }
}

.posts-view {
  display: flex;
  flex-flow: row wrap;
}

.chevron-left,
.chevron-right {
  width: 2.5rem;

  cursor: pointer;
}

.search-box {
  border: 0.5px solid white;
  border-radius: 4rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto 4rem auto;

  @include screen(tablet) {
    width: 60%;
  }

  & > * {
    display: inline;
  }
  &__icon {
    width: 2.5rem;
    margin-right: 1rem;
  }
  &__input {
    height: 4rem;
    width: 100%;
    background-color: transparent;
    border: none;
    color: $light-grey;
    font-size: 1.6rem;

    &:focus {
      outline: none;
    }
  }
}
</style>
