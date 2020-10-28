<template>
  <div
id="hot-sale-modal"
class="modal modal--sticky">
    <div class="modal__content">
      <button
        class="button button--close"
        @click="closeModal('hot-sale-modal')"
      />
      <h1 class="heading heading--promo u-margin-bottom--none">
        Hot sale<br >get it now
      </h1>
      <a href="#booking-modal">
        <button
          class="button button--bar"
          id="hot-sale-bar"
          @click="closeModal('hot-sale-modal')"
        >
          Book a meeting
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal: function (id) {
      let modal = document.getElementById(id)

      switch (id) {
        case 'hot-sale-modal':
          modal.style.display = 'none'
          break
        case 'booking-modal':
          let modalStart = modal.querySelector('#modal__start')
          let modalCalendly = modal.querySelector('#modal__calendly')
          modalStart.style.display = 'block'
          modalCalendly.style.display = 'none'
          break
      }
    },
  },
}
</script>

<style scoped lang="scss">
 #hot-sale-bar {
  background-color: $color-secondary;
  color: white;

  &:hover {
    color: rgba(255,255,255,0.8);
  }
 } 
</style>
