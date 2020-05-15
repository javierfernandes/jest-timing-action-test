
const doIt = require('../../../index')

describe('it is always good', () => {

  it('to test', async () => {
    const r = await doIt(1222)
    expect(r).toEqual('And we are done !')
  })

  it('to test pure functions', async () => {
    const r = await doIt(-300)
    expect(r).toEqual('And we are done !')
  })

  it('tests integrations', async () => {
    const r = await doIt(150)
    expect(r).toEqual('And we are done !')
  })

  it('but specially test side-effects!', async () => {
    const r = await doIt(150)
    expect(r).toEqual('And we are done !')
  })

})