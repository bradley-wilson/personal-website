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
        <div class="graph__overview">
          <div class="stat">
            <h3 class="heading heading--secondary u-margin-bottom u-margin-bottom--none">
              Reads
            </h3>
            <strong id="readers">
            55613 
            </strong>
          </div>
          <div class="stat">
            <h3 class="heading heading--secondary u-margin-bottom u-margin-bottom--none">
              Research Interest
            </h3>
            <strong id="highReaders">
              789
            </strong>
          </div>
          <div class="stat">
            <h3 class="heading heading--secondary u-margin-bottom u-margin-bottom--none">
              Citations
            </h3>
            <strong id="citations">
              1330
            </strong>
          </div>
        </div>
        <Stats
          :styles="lineChartStyles"
          :chartdata="stats"
          class="stats__graph"/>
      </div>
    </section>
    <section class="section-stats">
      <div class="container">
        <div class="badges">
          <Badge
            v-for="badge in badges"
            :key="award.id"
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
    // let scrappedData = await $axios.$get('http://ec2-3-22-118-235.us-east-2.compute.amazonaws.com/data.json')
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
      stats: {
        labels: statsRes.entries.map(stat => stat.week),
        datasets: [
          {
            label: 'Reads',
            data: statsRes.entries.map(stat => stat.reads),
            yAxisID: 'Reads',
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
            yAxisID: 'Citations',
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
    Award,
    Keywords
  },
  data() {
    return {
      appear: [],
      keywords: [
        { word: 'Marketing' },
        { word: 'Sports Management' },
        { word: 'Brand identiry' },
        { word: 'Product placement' },
        { word: 'Advertising' }
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
    this.animateValue('readers', 0, 55613, 8000)
    this.animateValue('highReaders', 0, 789, 8000)
    this.animateValue('citations', 0, 1330, 8000)
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

.stat {
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 0;

  &--group {
    padding: 15px;
    border-radius: 10px;
    border: white 2px solid;
  }

  &--list {
    width: 100%;
    margin-right: 15px;

    @include screen(tablet) {
      width: calc(100% / 3.5);
    }
  }

  h3 {
    text-align: center !important;
  }

  strong {
    text-align: center;
    font-size: 1.6rem;
    margin: 2vh 0;
    display: block;
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
  &__graph {
    width: 100%;
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

  @include screen(tablet) {
    flex-direction: row;
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
