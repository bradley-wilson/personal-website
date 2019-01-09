<template>
  <div
    id="hot-sale-modal"
    class="modal modal--sticky">
    <div class="modal__content">
      <button
        class="button button--close"
        onclick="closeModal('hot-sale-modal')" />
      <h1 class="heading heading--promo u-margin-bottom--none">Hot sale<br>get it now</h1>
      <a href="#booking-modal">
        <button
          class="button button--bar"
          onclick="closeModal('hot-sale-modal')">Book a meeting</button>
      </a>
    </div>
  </div>
</template>