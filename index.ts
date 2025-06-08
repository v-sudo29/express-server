import express, { Request, Response } from 'express'
import fs from 'fs'
import path from 'path'
import 'dotenv/config'
import authorRouter from './routes/authorRouter'
import indexRouter from './routes/indexRouter'
import bookRouter from 'routes/bookRouter'

const app = express()

// Enable EJS as the view engine - our app should look for templates in the /views directory
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

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

app.use((err, req, res, next) => {
  // need all four parameters to be recognized as an error middleware function
  console.error(err)
  res.status(err.statusCode || 500).send(err.message)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}`)
})
