const fs = require('fs')
const axios = require('axios')

async function updateStats() {
  let scrappedRes
  let statsRes
  let interestRes

  try {
    scrappedRes = await axios.get(
      'http://ec2-3-133-92-96.us-east-2.compute.amazonaws.com/data.json'
    )
  } catch (err) {
    console.log(err.message)
  }

  try {
    statsRes = await axios.get(
      'https://cockpit.bradwilsonphd.com/api/collections/get/stats?token=4458f0a2d0d2793a50fe20d0e9c519'
    )
    // return statsRes
  } catch (err) {
    console.error(err.message)
  }

  try {
    interestRes = await axios.get(
      'https://cockpit.bradwilsonphd.com/api/collections/get/interest?token=4458f0a2d0d2793a50fe20d0e9c519'
    )
    // return interestRes
  } catch (err) {
    console.error(err.message)
  }

  const currentStats = statsRes.data.entries
  const currentInterest = interestRes.data.entries
  const scrappedStats = scrappedRes.data

  const weekReads = scrappedStats.Researchgate['card4']['Weekly_change']
  const yearInterest = scrappedStats.Researchgate['card1']['Research_Interest']

  const statsData = {
    week: scrappedStats.Researchgate['card1'].weekdate,
    reads: weekReads.split('+').pop(),
  }

  const scrappedYear = scrappedStats.Researchgate['card1'].weekdate.slice(0, 4)

  const interestData = {
    year: scrappedYear,
    interest: yearInterest.split('Total:  ').pop(),
  }

  if (statsData.week !== currentStats[currentStats.length - 1].week) {
    try {
      await axios.post(
        'https://cockpit.bradwilsonphd.com/api/collections/save/stats?token=4458f0a2d0d2793a50fe20d0e9c519',
        {
          data: statsData,
        }
      )
    } catch (err) {
      console.error(err.message)
    }
  }

  if (interestData.year !== currentInterest[currentInterest.length - 1].year) {
    try {
      await axios.post(
        'https://cockpit.bradwilsonphd.com/api/collections/save/interest?token=4458f0a2d0d2793a50fe20d0e9c519',
        {
          data: interestData,
        }
      )
    } catch (err) {
      console.error(err.message)
    }
  }

  let data = JSON.stringify(scrappedStats)
  fs.writeFileSync('./assets/scrapped-data.json', data)
}

updateStats()
