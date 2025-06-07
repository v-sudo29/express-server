import { Router, Request, Response } from 'express'
import { getAuthorById } from '../controllers/authorController'

const authorRouter = Router()

authorRouter.get('/', (req: Request, res: Response): Promise<void> => {
  try {
    res.send('All authors!')
  } catch (err) {
    console.log(err)
  } finally {
    return
  }
})

authorRouter.get('/:authorId', getAuthorById)

export default authorRouter
