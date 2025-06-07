import { Router, Request, Response } from 'express'

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

authorRouter.get('/:authorId', (req: Request, res: Response): Promise<void> => {
  try {
    const { authorId } = req.params
    res.send(`Author id: ${authorId}`)
  } catch (err) {
    console.log(err)
  } finally {
    return
  }
})

export default authorRouter
