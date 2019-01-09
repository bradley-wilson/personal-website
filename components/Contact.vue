<template>
  <div class="container">
    <h1 class="heading heading--primary">Contact</h1>

    <div id="contact-form__wrapper"> 
      <form
        id="contact-form"
        class="form"
        method="post"
        accept-charset="UTF-8"
        @submit.prevent="submitContact">
        <input
          id="name"
          v-model="contact.name"
          type="text"
          class="form__input form__input--name"
          name="name"
          required
          placeholder="Name">
        <input
          id="email"
          v-model="contact.email"
          type="email"
          class="form__input form__input--email"
          name="email"
          required
          placeholder="Email">
        <textarea
          id="message"
          v-model="contact.message"
          class="form__input form__input--message"
          name="message"
          placeholder="Message" />

        <div style="text-align: center">
          <button
            class="button button--primary"
            type="submit">Submit</button>
        </div>
      </form>

      <div
        :class="{'form__message--visible': contactMessage, 'form__message--hidden': !contactMessage}"
        class="form__message text--description"> {{ formMessage }} </div>

      <h2
        class="heading heading--secondary u-margin-top--big"
        style="text-align: center">Or subscribe to our newsletter:</h2>
      <form
        id="newsletter"
        class="form"
        method="post"
        accept-charset="UTF-8">
        <input
          id="email"
          v-model="newsletter.email"
          type="email"
          class="form__input form__input--newsletter"
          name="email"
          required
          placeholder="Email">
        <div style="text-align: center">
          <button
            class="button button--primary"
            type="submit">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        message: ''
      },
      newsletter: {
        email: ''
      },
      contactError: false,
      contactMessage: false
    }
  },
  computed: {
    formMessage: function() {
      return this.contactError
        ? 'Submission failed. Try again.'
        : "Submission successful. We'll be in contact shortly."
    }
  },
  methods: {
    submitContact: function() {
      try {
        axios.post('/api/contact', {
          name: this.contact.name,
          email: this.contact.email,
          message: this.contact.message
        })
        this.error = false
      } catch (e) {
        this.error = true
        console.log(e)
      }
      this.toggleContactMessage()
    },
    toggleContactMessage: function() {
      let form = document.getElementById('contact-form')
      form.style.display = 'none'
      this.contactMessage = true
    }
  }
}
</script>

<style lang="scss">
.form {
  max-width: 60rem;
  margin: 0 auto;

  &__input {
    margin-bottom: 2rem;
    width: 100%;
    height: 5rem;
    background-color: rgba($black, 0.6);
    padding: 1.5rem;
    border: 0.5px solid white;
    border-radius: 4px;
    color: $light-grey;
    font-size: 1.6rem;

    @include screen(tablet) {
      height: 6rem;
    }
    @include screen(desktop) {
      font-size: 1.5rem;
    }

    &--message {
      height: 15rem;
      color: $light-grey;

      @include screen(tablet) {
        height: 25rem;
      }
    }
  }

  &__message {
    padding: 4rem;
    background-color: rgba($black, 0.6);
    text-align: center;

    &--visible {
      display: block;
    }

    &--hidden {
      display: none;
    }
  }
}
::-webkit-input-placeholder {
  color: $grey;
}
::-moz-placeholder {
  color: $grey;
}
:-ms-input-placeholder {
  color: $grey;
}
:-moz-placeholder {
  color: $grey;
}
</style>
