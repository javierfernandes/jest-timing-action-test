
const doIt = require('../../../indexindex')

describe('It is always good', () => {

  it('More !', async () => {
    const r = await doIt(1200)
    expect(r).toEqual('And we are done !')
  })

})