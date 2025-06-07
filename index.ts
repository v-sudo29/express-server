import express, { Request, Response } from 'express'
import fs from 'fs'
import 'dotenv/config'
import authorRouter from './routes/authorRouter'
import indexRouter from './routes/indexRouter'
import bookRouter from 'routes/bookRouter'

const app = express()

app.use('/authors', authorRouter)
app.use('/', indexRouter)
app.use('/books', bookRouter)

app.all('/{*any}', (req: Request, res: Response): Promise<void> => {
  try {
    const data = fs.readFileSync('404.html', 'utf8')
    res.status(404).send(data)
  } catch (err) {
    console.log(err)
  } finally {
    return
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`)
})
