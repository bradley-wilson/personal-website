<template>
  <div
    id="booking-modal"
    class="modal modal--pop-up modal--overlay">
    <div
      id="modal__content"
      class="modal__content">
      <a
        id="booking-modal__close-button"
        class="button button--close"
        href="#closed" />
      <div id="modal__calendly">
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/bradley-wilson"
          style="min-width:230px;" />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js" />
      </div>
    </div>
  </div>
  <div
    id="closed"
    class="modal--closed" />
  </div>
</template>