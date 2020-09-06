const fs = require('fs')
const axios = require('axios')

async function updateStats() {
  try {
    const scrappedRes = await axios.get('http://ec2-3-133-92-96.us-east-2.compute.amazonaws.com/data.json')
    return scrappedRes
  } catch (err) {
    console.error(err.message)
  }

  try {
    const statsRes = await axios.get('https://www.bradwilsonphd.com/cockpit/api/collections/get/stats?token=4458f0a2d0d2793a50fe20d0e9c519')
    return statsRes
  } catch (err) {
    console.error(err.message)
  }

  try {
    const interestRes = await axios.get('https://www.bradwilsonphd.com/cockpit/api/collections/get/interest?token=4458f0a2d0d2793a50fe20d0e9c519')
    return interestRes
  } catch (err) {
    console.error(err.message)
  }

  const currentStats = statsRes.data.entries
  const currentInterest = interestRes.data.entries
  const scrappedStats = scrappedRes.data

  const weekReads = scrappedStats.Researchgate['C4_Weekly change']
  const yearInterest = scrappedStats.Researchgate['C1_Research Interest']

  const statsData = {
    week: scrappedStats.Researchgate.weekdate,
    reads: weekReads.split('+').pop(),
  }

  const scrappedYear = scrappedStats.Researchgate.weekdate.slice(0,4)

  const interestData = {
    year: scrappedYear,
    interest: yearInterest.split('Total:  ').pop()
  }

  if (statsData.week !== currentStats[currentStats.length - 1].week) {
    try {
      await axios.post(
        'https://www.bradwilsonphd.com/cockpit/api/collections/save/stats?token=4458f0a2d0d2793a50fe20d0e9c519',
        {
          data: statsData
        }
      )
    } catch (err) {
      console.error(err.message)
    }
  }

  if (interestData.year !== currentInterest[currentInterest.length - 1].year) {
    try {
      await axios.post(
        'https://www.bradwilsonphd.com/cockpit/api/collections/save/interest?token=4458f0a2d0d2793a50fe20d0e9c519',
        {
          data: interestData
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
