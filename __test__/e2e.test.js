test('as promise', async () => {
  let angelMock = {}
  require('../index')(angelMock)
  let result = await angelMock.exec('echo test')
  expect(result).toBe(0)
})

test('as callback', (done) => {
  let angelMock = {}
  require('../index')(angelMock)
  angelMock.exec('echo test', (err, result) => {
    if (err) return done(err)
    expect(result).toBe(0)
    done()
  })
})
