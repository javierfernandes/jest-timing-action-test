
const doIt = require('./index')

describe('doIt test', () => {

  it('shoud wait for the given amount of time and produce a message', async () => {
    const r = await doIt(1200)
    expect(r).toEqual('And we are done !')
  })

  it('a second test', async () => {
    const r = await doIt(300)
    expect(r).toEqual('And we are done !')
  })

  it('a third test', async () => {
    const r = await doIt(150)
    expect(r).toEqual('And we are done !')
  })

})