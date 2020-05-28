
const doIt = require('./index')

describe('doIt test', () => {

  it('shoud wait for the given amount of time and produce a message', async () => {
    const r = await doIt(1200)
    expect(r).toEqual('And we are done !')
  })

  it('a second test', async () => {
    const r = await doIt(450)
    expect(r).toEqual('And we are done !')
  })

  it('a third test', async () => {
    const r = await doIt(250)
    expect(r).toEqual('And we are done !')
  })

})