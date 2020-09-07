<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__logo">
        <NavigationLogo />
      </div>
      <nav class="footer__menu">
        <div class="social-media social-media--footer">
          <a
            v-for="(link, id) in socialLinks"
            :key="id"
            :href="link.url"
            :style="{ backgroundImage: 'url(' + link.icon + ')' }"
            :title="link.title"
            class="social-media__button"
          />
        </div>
        <a
          v-for="(link, id) in links"
          :key="id"
          :href="link.url"
          class="menu__link menu__link--footer"
        >
          {{ link.title }}
        </a>
      </nav>
      <div class="copyright-notice">
        Copyright &#169; 2018. Bradley Wilson
      </div>
    </div>
  </footer>
</template>

<script>
import NavigationLogo from '@/components/NavigationLogo'

export default {
  components: {
    NavigationLogo,
  },
  data() {
    return {
      socialLinks: [
        {
          title: 'ResearchGate',
          url: 'https://www.researchgate.net/profile/Bradley_Wilson2',
          icon: '/img/researchgate-logo.png',
        },
        {
          title: 'Academia',
          url: 'https://uniandes.academia.edu/BradleyWilson',
          icon: '/img/academia-logo.png',
        },
        {
          title: 'LinkedIn',
          url: 'http://www.linkedin.com/in/bradley-wilson',
          icon: '/img/linkedin-logo.png',
        },
        {
          title: 'Publons',
          url: 'https://publons.com/author/1172248/bradley-wilson#profile',
          icon: '/img/publons-logo.png',
        },
        {
          title: 'Google Scholar',
          url:
            'https://scholar.google.com.au/citations?user=Bhp3eugAAAAJ&hl=en',
          icon: '/img/google-scholar-logo.png',
        },
        {
          title: 'Impact Story',
          url: 'https://profiles.impactstory.org/u/0000-0002-3730-6295',
          icon: '/img/impact-story-logo.png',
        },
        {
          title: 'Kudos',
          url: 'https://www.growkudos.com/profiles/216612',
          icon: '/img/kudos-logo.png',
        },
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/bradley.wilson.52056',
          icon: '/img/facebook-logo.png',
        },
      ],
      links: [
        {
          title: 'Kudos',
          url: 'https://www.growkudos.com/profiles/216612',
        },
        {
          title: 'Impact Story',
          url: 'https://profiles.impactstory.org/u/0000-0002-3730-6295',
        },
        {
          title: 'Google Scholar',
          url:
            'https://scholar.google.com.co/citations?user=Bhp3eugAAAAJ&hl=en<Paste>',
        },
        {
          title: 'Publons',
          url: 'http://www.researcherid.com/rid/S-6002-2016',
        },
        {
          title: 'ORCHID',
          url: 'https://orcid.org/0000-0002-3730-6295',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.footer {
  background-color: $black;
  padding: 3rem 0;
  text-align: center;

  &__logo {
    margin-bottom: 3rem;
  }

  &__menu {
    margin-bottom: 3rem;
    line-height: 1.2;
  }
  .menu__link {
    display: block;
    text-align: center;

    @include screen(desktop) {
      display: inline-block;
    }
  }
}

.copyright-notice {
  text-align: center;
  font-size: 1.3rem;
  color: $grey;
}
</style>
