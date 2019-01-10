<template>
  <div class="publications--expanded">
    <div
      v-for="publication in publications"
      :key="publication.id"
      class="row publication publication--expanded">
      <a
        :href="publication.url"
        target="_blank">
        <div class="col--phone-12 col--desktop-8">
          <div
            :style="[ publication.image.path ? { backgroundImage: 'url(' + publication.image.path + ')' } : { backgroundImage: 'url(/img/publication-thumbnail.svg)' } ]"
            class="publication__thumbnail"/>
          <!-- <div class="publication__info"> -->
          <div class="publication__title heading heading--tertiary"> {{ publication.title }} </div>
          <div class="publication__abstract text--description"> {{ publication.abstract ? truncateAbstract(publication.abstract) : 'Abstract unavailable.' }} </div>
          <div class="publication__authors text--metadata"> {{ publication.authors }} </div>
          <!-- </div>  -->
        </div>
        <div class="col--phone-12 col--desktop-4">
          <div class="publication__side-info">
            <div class="publication__year text--metadata"> {{ publication.year }} </div>
            <div
              v-if="publication.tags"
              class="publication__tags">
              <div
                v-for="(tag, index) in publication.tags"
                :key="index"
                class="publication__tag"> {{ tag }} </div>
            </div>
          </div>
        </div>
      </a>
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
  methods: {
    truncateAbstract: function(str) {
      let abs = str
        .split(/\s+/)
        .slice(0, 20)
        .join(' ')
      abs += '...'
      return abs
    }
  }
}
</script>

<style lang="scss">
.publication {
  margin: 1rem 0;
  background-color: rgba($black, 0.6);
  padding: 2rem;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s;

  @include screen(desktop) {
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

  &__side-info {
    margin-top: 1rem;
    border-top: 1px solid $grey;
    padding-top: 1rem;

    @include screen(desktop) {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
    }
  }

  &__year {
    color: white;
  }

  &__tags {
    @extend .text--metadata;
    color: $grey;
    font-weight: 400;
    font-size: 1.3rem;
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

  &__missing-label {
    padding: 3rem;
    background-color: rgba($black, 0.6);
  }
}

.publications {
  margin-bottom: 3rem;

  &--expanded {
    margin-bottom: 6rem;
  }
}
</style>
