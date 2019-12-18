<template>
  <div class="events__container">
    <div class="event row">
      <div class="col--phone-4 col--tablet-3">
        <div class="event__date">{{ event.date }}</div>
        <a
          :href="event.url"
          class="event__button">View more</a>
      </div>
      <div class="col--phone-8 col--tablet-9">
        <div class="event__title heading--tertiary">{{ event.title }}</div>
        <div class="event__description text--description">{{ event.description }}</div>
        <div class="event__location text--metadata">{{ event.location }}</div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: function() {
        return { message: 'initiated' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.events__container {
  max-width: 60rem;
  margin: auto;
}

.event {
  margin: 3rem 0;
  &__title {
    color: white;
    font-size: 2.1rem;
  }

  &__date {
    background-color: #19715b;
    width: 100%;
    text-align: center;
    padding: 1rem;
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
    font-size: 1.8rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    @include screen(tablet) {
      padding: 1.5rem;
      font-size: 2rem;
    }
  }

  &__button {
    background-color: $color-secondary;
    display: block;
    text-align: center;
    padding: 0.5rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.4rem;
    color: white;
    text-decoration: none;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;

    &:hover {
      color: rgba(white, 0.8);
    }

    @include screen(tablet) {
      padding: 0.8rem;
      font-size: 1.6rem;
    }
  }
}
</style>
