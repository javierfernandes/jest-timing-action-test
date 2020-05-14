
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const doIt = time => delay(time).then(() => 'And we are done !')
  
module.exports = doIt
