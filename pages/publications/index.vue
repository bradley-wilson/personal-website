<template>
  <div class="container">
    <h1 class="heading heading--primary">Publications</h1>     

    <h2 class="heading heading--secondary">Journals</h2>
    <Publications :publications="journals"/>

    <h2 class="heading heading--secondary">Book Chapters</h2>
    <Publications :publications="bookChapters"/>

    <h2 class="heading heading--secondary">Conferences</h2>
    <Publications :publications="conferences"/>

    <h2 class="heading heading--secondary">Other</h2>
    <Publications :publications="other"/>
  </div>
</template>

<script>
import Publications from '@/components/Publications'

export default {
  async asyncData({ $axios }) {
    const token = '?token=4458f0a2d0d2793a50fe20d0e9c519'
    let journalsRes = await $axios.$get(
      '/cockpit/article' + token + '&filter[type]=Journal&sort[year]=-1'
    )
    let bookChaptersRes = await $axios.$get(
      '/cockpit/article' + token + '&filter[type]=Book+chapter&sort[year]=-1'
    )
    let conferencesRes = await $axios.$get(
      '/cockpit/article' + token + '&filter[type]=Conference&sort[year]=-1'
    )
    let otherRes = await $axios.$get(
      '/cockpit/article' + token + '&filter[type]=Other&sort[year]=-1'
    )
    return {
      journals: journalsRes.entries,
      bookChapters: bookChaptersRes.entries,
      conferences: conferencesRes.entries,
      other: otherRes.entries
    }
  },
  components: {
    Publications
  }
}
</script>
