<template>
  <div>
    <div
      id="publications__tab-bar"
      class="tab-bar tab-bar--scrollable">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="[{'button--active': currentTab === tab }]"
        class="button button--tab"
        @click="currentTab = tab">
        {{ tab }}
      </button>
    </div>

    <div class="publications publications--compact">
      <div
        v-for="publication in selectedPublications"
        :key="publication.id"
        class="publication publication--expanded">
        <a
          :href="publication.url"
          target="_blank">
          <div
            :style="[ publication.image.path ? { backgroundImage: 'url(' + publication.image.path + ')' } : { backgroundImage: 'url(/img/publication-thumbnail.svg)' } ]"
            class="publication__thumbnail"/>
          <div class="publication__info">
            <div class="publication__title heading heading--tertiary"> {{ publication.title }} </div>
            <div class="publication__abstract text--description"> {{ publication.abstract ? truncateAbstract(publication.abstract) : 'Abstract unavailable.' }} </div>
            <div class="publication__authors text--metadata"> {{ publication.authors }} </div>
          </div> 
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    publications: {
      type: Array,
      default: function() {
        return { message: 'publications' }
      }
    }
  },
  data() {
    return {
      tabs: ['Journals', 'Book chapters', 'Conferences', 'Other'],
      currentTab: 'Journals',
      results: 6
    }
  },
  computed: {
    journals: function() {
      return this.filterPublications('Journal')
    },
    bookChapters: function() {
      return this.filterPublications('Book chapter')
    },
    conferences: function() {
      return this.filterPublications('Conference')
    },
    other: function() {
      return this.filterPublications('Other')
    },
    selectedPublications: function() {
      let selection
      switch (this.currentTab) {
        case 'Journals':
          selection = this.journals
          break
        case 'Book chapters':
          selection = this.bookChapters
          break
        case 'Conferences':
          selection = this.conferences
          break
        case 'Other':
          selection = this.other
          break
        default:
          selection = this.journals
      }
      return selection
    }
  },
  methods: {
    truncateAbstract: function(str) {
      let abs = str
        .split(/\s+/)
        .slice(0, 20)
        .join(' ')
      abs += '...'
      return abs
    },
    filterPublications: function(type) {
      let publicationsFiltered = []
      const results = this.results
      for (
        let i = 0;
        publicationsFiltered.length < results && i < this.publications.length;
        i++
      )
        if (this.publications[i].type === type) {
          publicationsFiltered.push(this.publications[i])
        }
      return publicationsFiltered
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar {
  margin: 1.5rem 0;
  text-align: center;

  &--scrollable {
    overflow: auto;
    visibility: hidden;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;

    &:not(*:root) {
      visibility: visible;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    & > * {
      visibility: visible;
    }
  }
}

.publications {
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
}

.publication {
  margin: 1rem;
  background-color: rgba($black, 0.6);
  padding: 2rem;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s;
  width: 100%;

  @include screen(desktop) {
    flex: 0 1 47%;

    &:hover {
      border: 1px solid white;
    }
  }

  &__abstract {
    overflow: hidden;
  }

  &__authors {
    color: white;
    overflow: hidden;
  }

  &__thumbnail {
    @include screen(desktop) {
      width: 11rem;
      height: 16rem;
      float: left;
      background-size: cover;
      background-position: center;
      margin-right: 2rem;
    }
  }

  &__info {
    overflow: hidden;
  }
}
</style>
