import {
  getAboutPage,
  getContactPage,
  getHomePage,
} from 'controllers/indexController'
import { Router, Response, Request } from 'express'

const indexRouter = Router()

indexRouter.get('/', getHomePage)

indexRouter.get('/about', getAboutPage)

indexRouter.get('/contact-me', getContactPage)

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
