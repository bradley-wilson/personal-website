<template>
  <div class="container">
    <section class="article u-margin-top--medium">
      <div class="text--body article__body" v-html="$md.render(policy)" />
    </section>
  </div>
</template>

<script>
import markdownIt from 'markdown-it'

export default {
  async asyncData({ $axios, params, env }) {
    const policyRes = await $axios.$get(env.cookieUrl)
    return { policy: policyRes.content }
  },
}
</script>

<style lang="scss" scoped>
.article {
  max-width: 800px;
  margin: auto;
  &__title {
    margin-bottom: 0;
  }
  &__image {
    width: 100%;
    margin-bottom: 2rem;
  }
  &__author {
    margin-bottom: 2rem;
    color: $grey;
  }
  &__tags {
    border-top: 1px solid #3c3c39;
    margin-top: 1rem;
    padding-top: 1rem;
  }
  &__tag {
    display: inline-block;
    border: 1px solid $grey;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  &__info {
    margin-top: 8rem;
  }
}

.tags__title {
  font-size: 1.8rem;
  font-family: 'Bebas Neue';
}
</style>

<style lang="scss">
.article__body {
  & > * {
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  & > blockquote {
    font-style: italic;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    border-left: solid 0.5rem #808080;
    padding-left: 2rem;

    & > * {
      color: $grey;
    }
  }

  & > ul,
  ol {
    padding-left: 5%;
  }

  & > p > img {
    display: block;
    margin: auto;
    max-width: 90%;
  }
}

li > ul,
ol {
  padding-left: 5%;
}

pre {
  // white-space: pre-wrap;
  max-width: 100%;
  overflow: scroll;
  background-color: #17212c;
  padding: 1.5rem;
  border-radius: 4px;

  & > code {
    padding: 0;
  }
}

code {
  background-color: #17212c;
  padding: 0.4rem;
  border-radius: 4px;
}

td,
th {
  border: 1px solid #3c3c39;
  padding: 0.8rem 1.4rem;
}

tr:nth-child(even) {
  background-color: #17212c;
}

table {
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
</style>
