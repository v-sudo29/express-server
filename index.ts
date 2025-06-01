import express, { Request, Response } from 'express'
import fs from 'fs'
import 'dotenv/config'

const app = express()

app.get('/', (req: Request, res: Response): Promise<void> => {
  try {
    const data = fs.readFileSync('index.html', 'utf8')
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  } finally {
    return
  }
})

app.get('/about', (req: Request, res: Response): Promise<void> => {
  try {
    const data = fs.readFileSync('about.html', 'utf8')
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  } finally {
    return
  }
})

app.get('/contact-me', (req: Request, res: Response): Promise<void> => {
  try {
    const data = fs.readFileSync('contact-me.html', 'utf8')
    res.send(data)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  } finally {
    return
  }
})

app.get(
  '/:name/listings/:listingId',
  (req: Request, res: Response): Promise<void> => {
    try {
      res.send(`${req.params.name}'s listing number ${req.params.listingId}`)
    } catch (err) {
      console.error(err)
    } finally {
      return
    }
  }
)

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
