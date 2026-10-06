import express from 'express'

const app = express()

app.use((_req, _res, _next) => {
  console.log(new Date().toISOString())
  _next()
})

app.use('/user/:id', (req, _res, next) => {
  console.log(req.method)
  next()
})

app.get('/test', (_req, res) => {
  res.send('OK')
})

app.get('/user/:id', (_req, res) => {
  res.send('USER')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
