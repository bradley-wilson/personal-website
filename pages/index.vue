<template>
  <div>
    <!-- Hero banner ----------------------------------------------------->
    <section class="section-banner">
      <BGVideo
        poster="img/banner-video.jpg"
        mp4-src="/videos/bg_banner.mp4"
        webm-src="/videos/bg_banner.webm" />

      <div class="container u-center">
        <h1 class="heading heading--title">Bradley Wilson</h1>
        <p class="subheading">
          Bradley has a keen interest in sponsorship, branding, advertising research,
          understanding image transfer, and methods advancement research.
        </p>
        <a
          href="#booking-modal"
          class="button">
          <button
            class="button button--primary"
            onclick="closeModal('hot-sale-modal')">
            Book a meeting</button>
        </a>
      </div>
    </section>

    <!-- About section --------------------------------------------------->
    <section
      id="section-about"
      class="section-about">
      <div class="container container--narrow">
        <div class="section-about__content">
          <h3>He has multiple affiliations as: Associate Professor of Communication, Branding and Urban Creative Cultures.</h3>
          <p class="text--body">
            Facultad de Administración, <a href="http://administracion.uniandes.edu.co/index/es/">Universidad de Los Andes</a>, Bogota, Colombia and Visiting Professor of Sponsorship and Services at Department of Services Management, <a href="https://www.dlm.uni-bayreuth.de/en/team/woratschek_herber/index.php">Universität Bayreuth</a>, Germany. He also has a frequent association with <a href="http://www.en.bwl.uni-muenchen.de/index.html">LMU Munich Business School</a> in Munich, Germany being a Visiting Professor of Communication at the Institute of Market-based Management. <a href="https://www.en.imm.bwl.uni-muenchen.de/06_persons/professoren/schwaiger/index.html">Munich Business School. Ludwig Maximilan Universitat (LMU).</a> He is a former Visiting Professor at <a href="http://gsom.spbru.ru/en/">Graduate School of Management (GSOM)</a> <a href="http://english.spbu.ru">St. Petersburg State University</a> in Russia.
          </p>
          <p class="text--body">
            Brad is a former Postgraduate Director and Senior Lecturer in Advertising at <a href="https://www.rmit.edu.au/about/our-education/academic-school/media-and-communication">"RMIT University in the School of Media and Communication</a>, Melbourne, Australia. This is the largest Media, Communication and Design School in the Southern Hemisphere. Brad is quite unique in his experience by spending half of his career in Arts, Design and Communications Faculties and also the other half in Business Faculties over a 20 year period.
          </p>
          <p class="text--body">
            Brad is on six Editorial Advisory Boards including Journal of Advertising Research, International Journal of Advertising, Corporate Reputation Review, International Journal of Sports Marketing and Sponsorship, Human Communication Research and a new predominantly Spanish language journal Revista Cientifica Internacional de Comunicacion y Publicidad (International Journal of Advertising and Communication). He used to work as a marketing research consultant in Advertising and Brand Evaluation at the previously named company <a href="http://www.addimpact.net">Advertising Development Solutions and ADD+Impact</a> (now <a href="http://www.lumaresearch.com">Luma Research</a>) in Melbourne, Australia.
          </p>
        </div>

        <!-- Background Van-de-Graff videos --------------------------------->
        <video
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
          class="van-de-graaff-generator van-de-graaff-generator--left">
          <source
            src="/videos/van-de-graaff-left.mp4"
            type="video/mp4">
          <source
            src="/videos/van-de-graaff-left.webm"
            type="video/webm">
        </video>
        <video
          autoplay
          muted
          loop
          playsinline
          webkit-playsinline
          class="van-de-graaff-generator van-de-graaff-generator--right">
          <source
            src="/videos/van-de-graaff-right.mp4"
            type="video/mp4">
          <source
            src="/videos/van-de-graaff-right.webm"
            type="video/webm">
        </video>
      </div>
    </section>

    <!-- Services section ------------------------------------------------>
    <section
      id="section-services"
      class="section-services">
      <div class="container">
        <h1 class="heading heading--primary">Services</h1>

        <div class="container container--narrow ">
          <div class="row">
            <div class="col--phone-6">
              <div class="service-item">
                <img
                  class="service-item__icon"
                  src="/img/chat-icon.svg"
                  alt="Chat icon">
                Consulting
              </div>
            </div>
            <div class="col--phone-6">
              <div class="service-item">
                <nuxt-link to="/connections">
                  <img
                    class="service-item__icon"
                    src="/img/presentation-icon.svg"
                    alt="Presentation icon">
                  Invited presentations
                </nuxt-link>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col--phone-6">
              <div class="service-item">
                <img
                  class="service-item__icon"
                  src="/img/link-icon.svg"
                  alt="Link icon">
                Talent-matching &amp; placement
              </div>
            </div>
            <div class="col--phone-6">
              <div class="service-item">
                <img
                  class="service-item__icon"
                  src="/img/education-icon.svg"
                  alt="Education icon">
                Courses &amp; seminars
              </div>
            </div>
          </div>

          <div
            class="row u-margin-bottom--medium">
            <div
              class="col--phone-6"
              @click="toTarget('#section-awards')"
            >
              <a href="/#section-awards">
                <div class="service-item">
                  <img
                    class="service-item__icon"
                    src="/img/award-icon.svg"
                    alt="Award icon">
                  Awards
                </div>
              </a>
            </div>
            <div class="col--phone-6">
              <div class="service-item">
                <img
                  class="service-item__icon"
                  src="/img/stats-icon.svg"
                  alt="Stats icon">
                Statistics
              </div>
            </div>
          </div>

          <div style="text-align: center">
            <a
              href="#section-contact"
              class="button button--primary u-margin-bottom--big">Contact</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Events section -------------------------------------------------->
    <section class="section-events">
      <div class="container">
        <h1 class="heading heading--primary">Upcoming events</h1>
        <Events
          v-for="event in events"
          :key="event.id"
          :event="event"/>
      </div>
    </section>

    <!-- Connections section --------------------------------------------->
    <section
      id="section-connections"
      class="section-connections">
      <div class="container">
        <h1 class="heading heading--primary">Connections</h1>
        <nuxt-link
          class="connections-thumbnail heading heading--secondary"
          to="/connections">View map!</nuxt-link>
      </div>
    </section>

    <!-- Stats section ---------------------------------------------------->
    <section class="section-stats">
      <div class="container">
        <div class="stat">
          <h3 class="heading heading--secondary u-margin-bottom u-margin-bottom--none">
            Readers
          </h3>
          <strong id="readers">
            729
          </strong>
        </div>
        <div class="stat">
          <h3 class="heading heading--secondary u-margin-bottom u-margin-bottom--none">
            Highly Engaged Readers
          </h3>
          <strong id="highReaders">
            187
          </strong>
        </div>
        <div class="stat">
          <h3 class="heading heading--secondary u-margin-bottom u-margin-bottom--none">
            Citations
          </h3>
          <strong id="citations">
            328
          </strong>
        </div>
        <Stats
          :styles="lineChartStyles"
          :chartdata="stats"
          class="stats__graph"/>
        <div class="liveKeywords">
          <h3 class="heading heading--secondary u-margin-bottom u-margin-bottom--none">
            Keywords
          </h3>
          <div class="keyword-grid">
            <span
              v-for="word in appear"
              :key="word.index"
            >
              {{ word.word }}
            </span>
          </div>
        </div>
        <div class="stat">
          <h3 class="heading heading--secondary u-margin-bottom u-margin-bottom--none">
            Universities
          </h3>
          <strong class="">
            Universidad de los Andes,<br>Bogotá, Colombia
          </strong>
          <strong>
            Universtat of Bayreuth,<br>Bayreuth, Germany
          </strong>
          <strong>
            Munich Business School,<br>München, Germany
          </strong>
          <strong>
            RMIT University,<br>Melbourne, Australia
          </strong>
          <strong>
            Saint Petersburg State University,<br>St. Petersburg, Russia
          </strong>
        </div>
        <div class="clustrmaps">
          <script
            id="clustrmaps"
            type="text/javascript"
            src="//cdn.clustrmaps.com/map_v2.js?cl=164f75&w=500&t=tt&d=_FPmRCaNhdSR-8Sm-yDSb5o4wV5syFTy1N482BLeb0g&co=061017&cmo=09a47b&cmn=424baf&ct=dddddd"/>
        </div>
      </div>
    </section>

    <!-- Publications section --------------------------------------------->
    <section
      id="section-publications"
      class="section-publications">
      <div class="container">
        <h1 class="heading heading--primary">Publications</h1>

        <RecentPublications :publications="publications"/>

        <div style="text-align: center">
          <nuxt-link
            to="/publications"
            class="button button--primary">View all</nuxt-link>
        </div>
      </div>
    </section>

    <!-- Awards section --------------------------------------------------->
    <section
      id="section-awards"
      class="section-awards"
    >
      <div class="container">
        <h1 class="heading heading--primary">Awards</h1>
        <div class="awards">
          <Award
            v-for="award in awards"
            :key="award.id"
            :award="award"/>
        </div>
      </div>
    </section>

    <!-- Feedback section ------------------------------------------------->
    <section class="section-feedback">
      <BGVideo 
        poster="img/feedback-video.jpg"
        mp4-src="/videos/bg_lights_low.mp4"
        webm-src="/videos/bg_lights_low.webm"/>

      <div class="container">
        <Carousel :quotes="quotes"/>
      </div>
    </section>

    <!-- Word cloud section ------------------------------------------------>
    <section class="section-word-cloud">
      <div class="container">
        <h2
          class="heading heading--primary u-margin-bottom u-margin-bottom--none"
        >Teaching Style</h2>
        <h2
          class="heading--secondary heading"
        >
          As described by students
        </h2>
        <img
          class="word-cloud"
          src="/img/word-cloud.svg"
          alt="Word cloud graphic">
      </div>
    </section>

    <!-- Contact section --------------------------------------------------->
    <section
      id="section-contact"
      class="section-contact">
      <Contact/>
    </section>

    <!-- Contacts section -------------------------------------------------->
    <section class="section-contacts">
      <div class="container">
        <h1 class="heading heading--primary">Contacts</h1>
        <TheContacts :contacts="contacts"/>
      </div>
    </section>

    <BookingModal/>
    <HotSaleModal/>
  </div>
</template>

<script>
import BGVideo from '@/components/BGVideo'
import Events from '@/components/Events'
import TheContacts from '@/components/TheContacts'
import Carousel from '@/components/Carousel'
import Stats from '@/components/Stats'
import RecentPublications from '@/components/RecentPublications'
import Contact from '@/components/Contact'
import BookingModal from '@/components/BookingModal'
import HotSaleModal from '@/components/HotSaleModal'
import Award from '@/components/Award'

export default {
  async asyncData({ $axios, env }) {
    let eventsRes = await $axios.$get(env.eventsUrl)
    let quotesRes = await $axios.$get(env.quotesUrl)
    let publicationsRes = await $axios.$get(
      `${env.publicationsUrl}&sort[year]=-1`
    )
    let contactsRes = await $axios.$get(env.contactsUrl)
    let statsRes = await $axios.$get(`${env.statsUrl}&sort[week]=1`)
    let awardsRes = await $axios.$get(env.awardsUrl)
    return {
      events: eventsRes.entries,
      quotes: quotesRes.entries,
      publications: publicationsRes.entries,
      contacts: contactsRes.entries,
      awards: awardsRes.entries,
      stats: {
        labels: statsRes.entries.map(stat => stat.week),
        datasets: [
          {
            label: 'Reads',
            data: statsRes.entries.map(stat => stat.reads),
            borderColor: 'rgb(50, 164, 123)',
            backgroundColor: 'rgba(50, 164, 123, 0.2)',
            pointBackgroundColor: 'rgb(50, 164, 123)',
            lineTension: 0.2,
            pointHitRadius: 20,
            borderWidth: 2
          },
          {
            label: 'Citations',
            data: statsRes.entries.map(stat => stat.citations),
            borderColor: 'rgb(66, 75, 175)',
            backgroundColor: 'rgba(66, 75, 175, 0.2)',
            pointBackgroundColor: 'rgb(66, 75, 175)',
            lineTension: 0.2,
            pointHitRadius: 20,
            borderWidth: 2
          }
        ]
      }
    }
  },
  components: {
    BGVideo,
    Events,
    TheContacts,
    Carousel,
    Stats,
    RecentPublications,
    Contact,
    BookingModal,
    HotSaleModal,
    Award
  },
  data() {
    return {
      appear: [],
      keywords: [
        { word: 'Marketing' },
        { word: 'Marketing' },
        { word: 'Marketing' },
        { word: 'Marketing' },
        { word: 'Marketing' },
        { word: 'Marketing' }
      ],
      lineChartStyles: {
        height: '50vh',
        width: '`100%',
        position: 'relative',
        backgroundColor: '#dddddd',
        borderRadius: '4px'
      }
    }
  },
  mounted: function() {
    this.animateValue('readers', 0, 729, 8000)
    this.animateValue('highReaders', 0, 187, 8000)
    this.animateValue('citations', 0, 328, 8000)
    this.appearWords(this.keywords, this.appear)
  },
  methods: {
    toTarget: function(target) {
      if (target) {
        console.log('Has target')
        this.$emit('hash-clicked', target)
      }
    },
    relaunch: function(id, start, end, duration) {
      this.animateValue(id, start, end, duration)
    },
    animateValue: function(id, start, end, duration) {
      var range = end - start
      var current = start
      var increment = end > start ? 1 : -1
      var stepTime = Math.abs(Math.floor(duration / range))
      var obj = document.getElementById(id)
      var timer = setInterval(function() {
        current += increment
        obj.innerHTML = current
        if (current == end) {
          clearInterval(timer)
        }
      }, stepTime)
    },
    appearWords: function(first, second) {
      let timer = setInterval(function() {
        if (first.length == 1) {
          clearInterval(timer)
        }
        let currentW = first.splice(0, 1)
        second.push(currentW[0])
      }, 1400)
    }
  },
  layout: 'landing-page'
}
</script>

<style lang="scss">
// BANNER ---------------------------------------------------------
.section-banner {
  height: 90vh;
  position: relative;
}

// ABOUT -----------------------------------------------------------
.section-about {
  background-color: #0e151f;
  padding: $section-padding;
  position: relative;
  overflow: hidden;

  &__content {
    z-index: 10;
    position: relative;
  }

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}

.van-de-graaff-generator {
  position: absolute;
  bottom: 0;
  max-width: 60%;
  max-height: 100%;
  display: none;

  &--right {
    right: -19rem;
  }
  &--left {
    left: -17.5rem;
  }

  @include screen(desktop) {
    display: block;
  }
}

// SERVICES -------------------------------------------------------
.section-services {
  padding: $section-padding;
  background-image: $gradient-light;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }

  .service-item {
    margin: 2rem 0;

    @include screen(tablet) {
      margin: 2rem auto;
      max-width: 20rem;
    }

    @include screen(desktop) {
      max-width: 30rem;
    }

    &__icon {
      height: 4rem;
      display: block;
      margin: 0 auto 1.5rem auto;

      @include screen(tablet) {
        display: inline-block;
        float: left;
        margin-right: 3rem;
      }
    }
  }
}

// EVENTS ----------------------------------------------------
.section-events {
  background-color: #0e151f;
  padding: $section-padding;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}

// CONNECTIONS -----------------------------------------------
.section-connections {
  padding: $section-padding;
  background-color: #061017;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}

.connections-thumbnail {
  width: 90%;
  padding: 15rem 0;
  display: block;
  margin: auto;
  border-radius: 1rem;
  border-bottom: none;
  background-image: url('/img/map-thumbnail.jpg');
  background-size: cover;
  background-position: center;
  transition: all 0.2s;
  text-align: center;

  @include screen(tablet) {
    padding: 20rem 0;
  }

  &:hover {
    transform: scale(1.05);
  }
}

// STATS -----------------------------------------------------
.section-stats {
  padding: $section-padding;
  background-image: $gradient-light;
  position: relative;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }

  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    .stat {
      width: calc(100% / 3);
      display: flex;
      justify-content: center;
      margin: 5vh 0;
      flex-direction: column;

      h3 {
        text-align: center !important;
      }

      strong {
        text-align: center;
        font-size: 1.4vw;
        margin: 2vh 0;
        display: block;
      }
    }

    .liveKeywords {
      width: 100%;

      h3 {
        text-align: center !important;
      }

      .keyword-grid {
        display: flex;
        min-height: 3vh;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        span {
          font-size: 1.5vw;
          display: block;
          text-transform: uppercase;
          padding: 2vh 1vw;
          font-weight: bolder;
        }
      }
    }
  }
}

.stats {
  &__graph {
    width: 100%;
  }
}

.clustrmaps {
  margin-top: 8rem;
  overflow: hidden;
  // padding-top: 56.25%;
  position: relative;

  & iframe {
    // border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

// PUBLICATIONS --------------------------------------------
.section-publications {
  padding: $section-padding;
  background-color: #061017;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}

// FEEDBACK -----------------------------------------------
.section-feedback {
  padding: $section-padding;
  position: relative;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}

// AWARDS ------------------------------------------------
.awards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @include screen(tablet) {
    flex-direction: row;
  }
}

// WORD CLOUD --------------------------------------------
.section-word-cloud {
  padding: $section-padding;
  background-image: $gradient-light;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}
.word-cloud {
  max-width: 80rem;
  margin: auto;
  display: block;
}

// CONTACT SECTION -------------------------------------
.section-contact {
  padding: $section-padding;
  background-color: #061017;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}

// CONTACTS SECTION ----------------------------------
.section-contacts {
  padding: $section-padding;
  background-image: $gradient-light;

  @include screen(tablet) {
    padding: $section-padding-tablet;
  }
  @include screen(desktop) {
    padding: $section-padding-desktop;
  }
}
</style>
