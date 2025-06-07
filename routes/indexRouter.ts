import { Router, Response, Request } from 'express'
import fs from 'fs'

const indexRouter = Router()

indexRouter.get('/', (req: Request, res: Response) => {
  try {
    const page = fs.readFileSync('index.html', 'utf8')
    console.log(req.body)
    res.send(page)
  } catch (err) {
    console.log(err)
  } finally {
    return
  }
})

indexRouter.get('/about', (req: Request, res: Response): Promise<void> => {
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

indexRouter.get('/contact-me', (req: Request, res: Response): Promise<void> => {
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

indexRouter.get(
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

export default indexRouter
