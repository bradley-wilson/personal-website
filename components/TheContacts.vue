<template>
  <div class="contact__container">
    <div
      v-for="contact in contacts"
      :key="contact.id"
      class="contact">
      <a
        :href="contact.url"
        target="_blank">
        <div
          :style="{backgroundImage: 'url(' + contact.image.path + ')'}"
          class="contact__picture"/>
        <div class="contact__name heading--tertiary"> {{ contact.name }} </div>
      </a> 
      <div class="contact__description text--description"> {{ contact.role }} </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      default: function() {
        return { message: 'contacts' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  padding: 2rem;
  width: 100%;

  @include screen(tablet) {
    flex: 0 1 49%;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;

    @include screen(tablet) {
      max-width: 80%;
      margin: auto;
    }
  }

  &__picture {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    float: left;
    margin-right: 2rem;
    background-size: cover;
  }

  &__name {
    color: white;
    overflow: hidden;

    &:hover {
      color: $light-grey;
    }
  }

  &__description {
    overflow: hidden;
  }

  // &__info {
  //   overflow:  hidden;
  // }
}
</style>
