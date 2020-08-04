const fs = require('fs')
fs.writeFileSync('./.env', `
BASE_URL=${process.env.BASE_URL}\n
EVENTS_URL=${process.env.EVENTS_URL}\n
QUOTES_URL=${process.env.QUOTES_URL}\n
PUBLICATIONS_URL=${process.env.PUBLICATIONS_URL}\n
CONTACTS_URL=${process.env.CONTACTS_URL}\n
STATS_URL=${process.env.STATS_URL}\n
INTEREST_URL=${process.env.INTEREST_URL}\n
AWARDS_URL=${process.env.AWARDS_URL}\n
BIOS_URL=${process.env.BIOS_URL}\n
POSTS_URL=${process.env.POSTS_URL}\n
URL=${process.env.URL}\n
SEARCHES_URL=${process.env.SEARCHES_URL}\n
WEEK_URL=${process.env.WEEK_URL}
`)
