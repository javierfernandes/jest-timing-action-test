
const doIt = require('./index')

describe('doIt test', () => {

  it('shoud wait for the given amount of time and produce a message', async () => {
    const r = await doIt(1236)
    expect(r).toEqual('And we are done !')
  })

})