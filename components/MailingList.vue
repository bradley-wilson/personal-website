<template>
  <div class="container">
    <div id="contact-form__wrapper">
      <h2
        class="heading heading--secondary u-margin-top--big"
        style="text-align: center;"
      >
        Subscribe to our mailing list:
      </h2>
      <form
        action="https://bradwilsonphd.us7.list-manage.com/subscribe/post?u=0ca2187b7102f72e754391083&amp;id=fb615859a1"
        method="post"
        id="newsletter"
        name="mc-embedded-subscribe-form"
        class="validate form"
        target="_blank"
        novalidate
       >
        <input
          id="MERGE0"
          v-model="newsletter.email"
          type="email"
          class="form__input form__input--newsletter"
          name="MERGE0"
          autocapitalize="off"
          autocorrect="off"
          size="25"
          value=""
          required
          placeholder="Email"
        >
        <div class="form__group">
          <strong>Receive content sooner </strong>
          <ul>
            <li><input type="radio" value="Yes" name="SOONER" id="mce-SOONER-0" class="radio-button"><label for="mce-SOONER-0">Yes</label></li>
            <li><input type="radio" value="No" name="SOONER" id="mce-SOONER-1" class="radio-button"><label for="mce-SOONER-1">No</label></li>
          </ul>
        </div>
        <div style="text-align: center;">
          <input
            class="button button--primary"
            type="submit"
            name="submit"
            value="Sign up"
          >
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
        message: '',
      },
      newsletter: {
        email: '',
      },
      contactError: false,
      contactMessage: false,
    }
  },
  computed: {
    formMessage: function () {
      return this.contactError
        ? 'Submission failed. Try again.'
        : "Submission successful. We'll be in contact shortly."
    },
  },
  methods: {
    submitContact: function () {
      try {
        axios.post(`${process.env.formUrl}`, {
          form: {
            name: this.contact.name,
            email: this.contact.email,
            message: this.contact.message,
          },
        })
        this.error = false
        console.log('Form sent')
      } catch (e) {
        this.error = true
        console.log(e)
      }
      this.toggleContactMessage()
    },
    toggleContactMessage: function () {
      let form = document.getElementById('contact-form')
      form.style.display = 'none'
      this.contactMessage = true
    },
  },
}
</script>

<style lang="scss" scoped>
.radio-button {
  margin-right: 1rem;
}

.form {
  max-width: 60rem;
  margin: 0 auto;

  &__label {
    font-size: 1.6rem;
    color: $light-grey;
    margin-left: 0.5rem;
  }

  &__group {
    font-size: 1.8rem;

    ul {
      list-style-type: none;
    }
  }

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
      font-family: $Muli;

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
