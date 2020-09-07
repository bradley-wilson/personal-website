<template>
  <div>
    <div
id="booking-modal"
class="modal modal--pop-up modal--overlay">
      <div
id="modal__content"
class="modal__content">
        <a
          id="booking-modal__close-button"
          class="button button--close"
          href="#closed"
        />
        <div id="modal__calendly">
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/bradley-wilson"
            style="min-width: 230px;"
          />
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
          />
        </div>
      </div>
    </div>
    <div
id="closed"
class="modal--closed" />
  </div>
</template>

<style lang="scss">
.modal {
  &--overlay {
    background-color: rgba(black, 0.7);
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;

    &:target {
      visibility: visible;
      opacity: 1;
    }
  }

  &__content {
    @include centerElement;
    width: 90%;
    background-color: #ccc;
    border-radius: 4px;
    padding: 3rem;
    color: $dark-blue;

    @include screen(tablet) {
      width: initial;
      padding: 5rem 7rem;
    }
  }

  // Sticky modal
  &--sticky {
    .modal__content {
      position: fixed;
      z-index: 10;
      background-color: $dark-blue;
      color: white;
      bottom: 1.5rem;
      transform: translateX(-50%);
      top: initial;
      left: 50%;
      right: initial;
      padding: 0;
      box-shadow: 0 0 3rem rgba(black, 0.5);

      @include screen(tablet) {
        right: 2rem;
        left: initial;
        transform: initial;
      }
    }
  }

  &--closed {
    position: fixed;
  }
}

#modal {
  &__calendly {
    display: block;

    @include screen(tablet) {
      min-width: 40rem;
    }

    @include screen(desktop) {
      min-width: 60rem;
    }

    & > :first-child {
      height: 350px;

      @include screen(tablet) {
        height: 400px;
      }
    }
  }
}
</style>
