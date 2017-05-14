
const send = require('../lib/send')

async function fire() {
  const data = await send('/event/fire')
  console.log(data.body)
}

setInterval(fire, 1000)
