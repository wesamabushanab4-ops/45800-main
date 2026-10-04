import express from 'express'
import cors from 'cors'
import cityRoutes from './routes/cityRoutes'
import courseRoutes from './routes/courseRoutes'

const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (_req, res) => {
  res.send('Hello Node')
})
app.use('/cities', cityRoutes)
app.use('/courses', courseRoutes)

const PORT = 3002

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
