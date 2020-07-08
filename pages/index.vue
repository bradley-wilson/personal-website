<template>
  <div>
    <!-- Hero banner ---------------------------------------------------->
    <section class="section-banner">
      <BGVideo
        poster="img/banner-video.jpg"
        mp4-src="/videos/bg_banner.mp4"
        webm-src="/videos/bg_banner.webm" />
      <!-- <BGVideo
        poster="img/map-line-connection.ong"
        mp4-src="/videos/map-line-connection.mp4"
        webm-src="/videos/map-line-connection.webm" /> -->
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

    <!-- About section -------------------------------------------------->
    <section
      id="section-about"
      class="section-about">
      <div class="container container--narrow">
        <div
          class="section-about__content"
          v-html="$md.render(bio)"/>

        <!-- Background Van-de-Graff videos -------------------------------->
      </div>
    </section>

    <!-- Services section ---------------------------------------------->
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

    <!-- Connections section -------------------------------------------->
    <section
      id="section-connections"
      class="section-connections">
      <div class="container section-connections__container">
        <h1 class="heading heading--primary">Connections</h1>
        <div class="connections">
          <div class="connections__buttons">
            <a
              href="/work-connections"
              class="button button--tab">Work connections</a>
            <a
              href="/global-readership"
              class="button button--tab">Global readership</a>
            <a
              href="/invited-presentations"
              class="button button--tab">Invited presentations</a>
            <a
              href="/countries-visited"
              class="button button--tab">Countries visited</a>
          </div>
          <div class="connections-thumbnail heading heading--secondary"></div>
        </div>
      </div>
    </section>

    <!-- Stats section ---------------------------------------------------->
    <section class="section-graph">
      <BGVideo
        poster="img/map-line-connection.ong"
        mp4-src="/videos/map-line-connection.mp4"
        webm-src="/videos/map-line-connection.webm" />
      <div class="container">
        <h1 class="heading heading--primary u-block">Research Impact and Audience Engagement</h1>
        <div class="scoreboard__container">
          <div class="scoreboard">
            <div class="scoreboard__header">
              Scoreboard
            </div>
            <div class="scoreboard__data">
              <div class="scoreboard-data__item">
                <span class="scoreboard-item__color scoreboard-item__color--1"></span>
                Citations
                <span class="scoreboard-item__value"> {{ scoreboard.citations }} </span>
              </div>
              <div class="scoreboard-data__item">
                <span class="scoreboard-item__color scoreboard-item__color--2"></span>
                H-Index
                <span class="scoreboard-item__value"> {{ scoreboard.hIndex }} </span>
              </div>
              <div class="scoreboard-data__item">
                <span class="scoreboard-item__color scoreboard-item__color--3"></span>
                I10-Index
                <span class="scoreboard-item__value"> {{ scoreboard.i10Index }} </span>
              </div>
            </div>
          </div>
        </div>
        <div class="stats__carousel">
          <div
            id="stats__track"
            class="stats__track">
            <div class="stats__slide stats__slide--1">
              <Stats
                :styles="lineChartStyles"
                :chartdata="readsData"
                class="stats__graph"/>
              <div class="stats__circle">
                <span class="stats__value stats__value--reads">+250</span>
                <span class="stats__description">Reads this week</span>
              </div>
            </div>
            <div class="stats__slide stats__slide--2">
              <Stats
                :styles="lineChartStyles"
                :chartdata="citationsData"
                class="stats__graph"/>
              <div class="stats__circle">
                <span class="stats__value stats__value--citations">+320</span>
                <span class="stats__description">Citations this year</span>
              </div>
            </div>
            <div class="stats__slide stats__slide--3">
              <Stats
                :styles="lineChartStyles"
                :chartdata="interestData"
                class="stats__graph"/>
              <div class="stats__circle">
                <span class="stats__value stats__value--interest">+35%</span>
                <span class="stats__description">Research interest this year</span>
              </div>
            </div>
          </div>
        </div>
        <div class="graph__buttons">
          <span
            id="button-reads"
            class="graph__button">
            <span class="graph__button--icon graph__button--icon-reads"></span>
            Reads
          </span>
          <span
            id="button-citations"
            class="graph__button">
            <span class="graph__button--icon graph__button--icon-citations"></span>
            Citations
          </span>
          <span
            id="button-interest"
            class="graph__button">
            <span class="graph__button--icon graph__button--icon-interest"></span>
            Research Interest
          </span>
        </div>
      </div>
    </section>
    <section class="section-stats">
      <div class="container">
        <div class="badges">
          <Badge
            v-for="badge in badges"
            :key="badge.id"
            :badge="badge"/>
        </div>

        <h1 class="heading heading--primary">Keywords</h1>
        <Keywords :searches="searches"/>

        <div class="clustrmaps">
          <h1 class="heading heading--primary u-block">Online Visitors</h1>
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
import Badge from '@/components/Badge'
import Keywords from '@/components/Keywords'
import markdownIt from 'markdown-it'

export default {
  async asyncData({ $axios, env }) {
    let bioRes = await $axios.$get(env.bioUrl)
    let eventsRes = await $axios.$get(env.eventsUrl)
    let quotesRes = await $axios.$get(env.quotesUrl)
    let publicationsRes = await $axios.$get(
      `${env.publicationsUrl}&sort[year]=-1`
    )
    let contactsRes = await $axios.$get(env.contactsUrl)
    let statsRes = await $axios.$get(`${env.statsUrl}&sort[week]=1`)
    let awardsRes = await $axios.$get(env.awardsUrl)
    let searchesRes = await $axios.$get(env.searchesUrl)
    let scrappedData = await $axios.$get('http://ec2-3-22-118-235.us-east-2.compute.amazonaws.com/data.json')
    let impactStoryRes = await $axios.$get('https://profiles.impactstory.org/api/person/0000-0002-3730-6295')
    return {
      bio: bioRes.content,
      events: eventsRes.entries,
      quotes: quotesRes.entries,
      publications: publicationsRes.entries,
      contacts: contactsRes.entries,
      awards: awardsRes.entries,
      searches: searchesRes.entries,
      badges: impactStoryRes.badges,
      readsData: {
        labels: statsRes.entries.map(stat => stat.week),
        datasets: [
          {
            label: 'Reads',
            data: statsRes.entries.map(stat => stat.reads),
            borderColor: 'rgb(102, 113, 124)',
            // backgroundColor: 'rgba(50, 164, 123, 0.2)',
            pointBackgroundColor: 'rgb(255, 139, 14)',
            lineTension: 0.2,
            pointHitRadius: 20,
            borderWidth: 2
          }
        ]
      },
      citationsData: {
        labels: statsRes.entries.map(stat => stat.week),
        datasets: [
          {
            label: 'Citations',
            data: statsRes.entries.map(stat => stat.citations),
            borderColor: 'rgb(102, 113, 124)',
            // backgroundColor: 'rgba(66, 75, 175, 0.2)',
            pointBackgroundColor: 'rgb(0, 172, 246)',
            lineTension: 0.2,
            pointHitRadius: 20,
            borderWidth: 2
          }
        ]
      },
      interestData: {
        labels: statsRes.entries.map(stat => stat.week),
        datasets: [
          {
            label: 'Research Interest',
            data: statsRes.entries.map(stat => stat.reads),
            borderColor: 'rgb(102, 113, 124)',
            // backgroundColor: 'rgba(50, 164, 123, 0.2)',
            pointBackgroundColor: 'rgb(0, 240, 170)',
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
    Award,
    Badge,
    Keywords
  },
  data() {
    return {
      statsCounter: 1,
      appear: [],
      scoreboard: {
        citations: 853,
        hIndex: 14,
        i10Index: 17
      },
      lineChartStyles: {
        height: '40vh',
        width: '`100%',
        position: 'relative',
        backgroundColor: '#011a2a',
        borderRadius: '4px'
      }
    }
  },
  mounted: function() {
    setInterval(this.statsMoveForward, 10000)
  },
  methods: {
    toTarget: function(target) {
      if (target) {
        console.log('Has target')
        this.$emit('hash-clicked', target)
      }
    },
    statsMoveForward: function() {
      let statsOffset  = -100 * this.statsCounter
      let track = document.getElementById('stats__track')
      if (this.statsCounter == 3) {
        track.style.transform = 'translateX(0%)'
        this.statsCounter = 0
      } else {
        track.style.transform = 'translateX(' + statsOffset + '%)'
        this.statsCounter++
      }
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

    p {
      margin-bottom: 3rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
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

.connections {
  display: flex;
  flex-direction: column;

  &__buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    flex-direction: column;

    @include screen(tablet) {
      flex-direction: row;
      align-items: center;
    }
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
  text-align: center;

  @include screen(tablet) {
    padding: 20rem 0;
  }
}

// STATS -----------------------------------------------------
.section-graph {
  position: relative;
  padding: $section-padding;
}

.graph {
  &__buttons {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 2.4rem;
  }

  &__button {
    &--icon {
      width: 1.5rem;
      height: 1.5rem;
      display: inline-block;
      border-radius: 1.5rem;
      margin-right: 2.5rem;

      &::last-of-type {
        margin-right: 0;
      }

      &-reads {
        background-color: rgb(255, 139, 14);
      }
      &-citations {
        background-color: rgb(0, 172, 246);
      }
      &-interest {
        background-color: rgb(0, 240, 170);
      }
    }
  }

  &__overview {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;

    @include screen(tablet) {
      flex-direction: row;
    }
  }
}

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
    flex-direction: column;

    @include screen(tablet) {
      flex-direction: row;
    }

    .liveKeywords {
      h3 {
        text-align: center !important;
      }
    }
  }
}

.stats {
  &__carousel {
    position: relative;
    height: 40rem;
    overflow: hidden;
  }

  &__track {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: translateX(0%);
    transition: transform 0.5s ease 0s;
  }

  &__graph {
    width: 100%;

    @include screen(tablet) {
      width: 80%;
    }
  }

  &__slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    // height: 100%;

    @include screen(tablet) {
      flex-direction: row;
    }

    &--1 {
      transform: translateX(0%);
    }
    &--2 {
      transform: translateX(100%);
    }
    &--3 {
      transform: translateX(200%);
    }
  }

  &__circle {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3rem;
    // width: 15rem;
  }

  &__value {
    padding: 7rem;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    font-size: 4.2rem;
    font-family: $Bebas;
    margin-bottom: 2rem;

    &--reads {
      background-image: url(/img/reads-circle.svg);
    }
    &--citations {
      background-image: url(/img/citations-circle.svg);
    }
    &--interest {
      background-image: url(/img/interest-circle.svg);
    }
  }

  &__description {
    font-size: 2.4rem;
    font-family: $Bebas;
    text-align: center;
  }
}

.clustrmaps {
  margin-top: 8rem;
  overflow: hidden;
  // padding-top: 56.25%;
  position: relative;
  max-width: 100%;

  & iframe {
    // border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.badges {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 15rem;

  @include screen(tablet) {
    flex-direction: row;
  }
}

.scoreboard {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  margin-bottom: 1rem;


  &__container {
    display: flex;
    justify-content: center;
  }

  &__header {
    padding: 1rem 5rem;
    background-color: #177ba6;
    border-radius: 10rem;
    width: 100%;
    text-align: center;
    font-family: $Bebas;
    text-transform: uppercase;
    font-size: 1.8rem;
    
    &::after {
      content: '';
      background-color: #0d5978;
      border-radius: 10rem;
      z-index: -1;
      width: 100%;
      height: 4rem;
      display: block;
      position: absolute;
      top: 1rem;
      left: 0;
    }
  }

  &__data {
    background-color: #002f3a;
    padding: 3rem 5rem;
    width: 90%;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
    display: flex;
    flex-direction: column;
    z-index: -2;
  }

  &-data__item {
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 700;
    display: flex;
    justify-content: space-between;

    &::last-of-type {
      margin-bottom: 0;
    }
  }

  &-item__value {
    padding: .4rem;
    background-color: #177ba6;
    border-radius: .5rem;
  }

  &-item__color {
    width: 1rem;
    height: 1.5rem;
    border-radius: .5rem;
    display: block;

    &--1 {
      background: #2ee49b;
    }
    &--2 {
      background-color: #460fa6;
    }
    &--3 {
      background-color: #1244e5;
    }
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
