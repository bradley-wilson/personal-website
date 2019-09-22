<template>
  <header class="header">
    <div class="container">
      <NavigationLogo/>

      <!-- Navigation icon for mobile -------------------------------------------->
      <div
        class="nav-icon nav-button"
        @click="toggleNav">
        <span class="nav-icon__bar" />
        <span class="nav-icon__bar" />
      </div>

      <nav class="header__menu">
        <div class="menu__container">
          <div
            v-for="(link, id) in links"
            :key="id"
            class="menu__link"
            @click="toTarget(link.target); closeNav()">
            <a
              :href="link.url"
              class="menu__link--inner"> {{ link.title }} </a>
          </div>
          
          <div class="social-media">
            <a
              v-for="(link, id) in socialLinks"
              :key="id"
              :href="link.url"
              :style="{backgroundImage: 'url(' + link.icon + ')'}"
              :title="link.title"
              class="social-media__button"/>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import NavigationLogo from '@/components/NavigationLogo'

export default {
  components: {
    NavigationLogo
  },
  data() {
    return {
      rotated: false,
      links: [
        {
          title: 'About',
          url: '/#section-about',
          target: '#section-about'
        },
        {
          title: 'Services',
          url: '/#section-services',
          target: '#section-services'
        },
        { title: 'Connections', url: '/connections' },
        { title: 'Publications', url: '/publications' },
        { title: 'Team', url: '/team' },
        { title: 'Blog', url: '/blog' },
        {
          title: 'Contact',
          url: '/#section-contact',
          target: '#section-contact'
        }
      ],
      socialLinks: [
        {
          title: 'ResearchGate',
          url: 'https://www.researchgate.net/profile/Bradley_Wilson2',
          icon: '/img/researchgate-logo.png'
        },
        {
          title: 'Academia',
          url: 'https://uniandes.academia.edu/BradleyWilson',
          icon: '/img/academia-logo.png'
        },
        {
          title: 'LinkedIn',
          url: 'http://www.linkedin.com/in/bradley-wilson',
          icon: '/img/linkedin-logo.png'
        },
        {
          title: 'Publons',
          url: 'https://publons.com/author/1172248/bradley-wilson#profile',
          icon: '/img/publons-logo.png'
        },
        {
          title: 'Google Scholar',
          url:
            'https://scholar.google.com.au/citations?user=Bhp3eugAAAAJ&hl=en',
          icon: '/img/google-scholar-logo.png'
        },
        {
          title: 'Impact Story',
          url: 'https://profiles.impactstory.org/u/0000-0002-3730-6295',
          icon: '/img/impact-story-logo.png'
        },
        {
          title: 'Kudos',
          url: 'https://www.growkudos.com/profiles/216612',
          icon: '/img/kudos-logo.png'
        },
        {
          title: 'Google+',
          url: '#',
          icon: '/img/google-plus-logo.png'
        },
        {
          title: 'Facebook',
          url: '#',
          icon: '/img/facebook-logo.png'
        }
      ]
    }
  },
  methods: {
    toTarget: function(target) {
      if (target) {
        console.log('Has target')
        this.$emit('hash-clicked', target)
      }
    },
    toggleNav: function() {
      const iconBars = document.getElementsByClassName('nav-icon__bar')
      const menu = document.querySelector('.header__menu')

      if (this.rotated === false) {
        iconBars[0].style.transform = 'rotate(45deg) translateY(-8px)'
        iconBars[1].style.transform = 'rotate(-45deg) translateY(7px)'
        menu.style.transform = 'translateY(0)'
        this.rotated = true
      } else {
        iconBars[0].style.transform = 'rotate(0) translateY(0)'
        iconBars[1].style.transform = 'rotate(0) translateY(0)'
        menu.style.transform = 'translateY(-100%)'
        this.rotated = false
      }
    },
    closeNav: function() {
      const iconBars = document.getElementsByClassName('nav-icon__bar')
      const menu = document.querySelector('.header__menu')

      if (this.rotated) {
        iconBars[0].style.transform = 'rotate(0) translateY(0)'
        iconBars[1].style.transform = 'rotate(0) translateY(0)'
        menu.style.transform = 'translateY(-100%)'
        this.rotated = false
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  position: absolute;
  width: 100%;
  z-index: 9;

  &__menu {
    background-color: $gradient-dark;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    padding: 2rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease 0s;

    @include screen(desktop) {
      float: right;
      background-color: initial;
      transform: translateY(0);
      position: initial;
      top: initial;
      right: initial;
      width: initial;
      height: initial;
      margin-top: 2rem;
      padding: 0;
    }
  }
}

.menu {
  &__container {
    max-width: 80%;
    margin: auto;
    padding-top: 5rem;

    @include screen(desktop) {
      @include resetCenter;
      max-width: 100%;
      margin: 0;
      padding-top: 0;
    }
  }

  &__link {
    padding: 0.7rem 2rem !important;
    margin: 0.5rem;
    border: 1px solid transparent;
    display: block;
    text-align: center;
    z-index: 100;

    &:hover {
      border: 1px solid white;
    }

    @include screen(tablet) {
      margin: 1.5rem;
    }

    @include screen(desktop) {
      display: initial;
      text-align: initial;
      margin: 0;
      z-index: initial;
    }

    &--inner {
      border-bottom: none;
      color: white;
      &:hover {
        color: white;
      }
    }
  }
}

.nav-button {
  float: right;

  @include screen(desktop) {
    display: none;
  }
}

.icon {
  &--researchgate {
    background-image: url('/img/researchgate-logo.png');
  }
  &--academia {
    background-image: url('/img/academia-logo.png');
  }
  &--linkedin {
    background-image: url('/img/linkedin-logo.png');
  }
  &--publons {
    background-image: url('/img/publons-logo.png');
  }
  &--google-scholar {
    background-image: url('/img/google-scholar-logo.png');
  }
  &--impact-story {
    background-image: url('/img/impact-story-logo.png');
  }
  &--kudos {
    background-image: url('/img/kudos-logo.png');
  }
  &--google-plus {
    background-image: url('/img/google-plus-logo.png');
  }
  &--facebook {
    background-image: url('/img/facebook-logo.png');
  }
}

.social-media {
  text-align: center;
  padding: 0.7rem 2rem;

  &__button {
    border-bottom: none;
    margin: 0.5rem;
    background-size: cover;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: inline-block;
  }

  @include screen(desktop) {
    text-align: right;
  }

  &--footer {
    text-align: center;
  }
}

.nav-icon {
  z-index: 101;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &__bar {
    background-color: white;
    display: block;
    height: 3px;
    width: 3rem;
    margin: 0.7rem 0;
    transition: transform 0.3s ease 0s;

    &:first-child {
      transform-origin: top left;
    }

    &:last-child {
      transform-origin: bottom left;
    }
  }
}
</style>
