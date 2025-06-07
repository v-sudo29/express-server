import { Router, Response, Request } from 'express'

const bookRouter = Router()

bookRouter.get('/', (req: Request, res: Response) => {
  try {
    res.send('All books!')
  } catch (err) {
    console.log(err)
  } finally {
    return
  }
})

bookRouter.get('/:bookId', (req: Request, res: Response) => {
  try {
    const { bookId } = req.params
    res.send(`Book id: ${bookId}`)
  } catch (err) {
    console.log(err)
  } finally {
    return
  }
})

bookRouter.get('/:bookId/reserve', (req: Request, res: Response) => {
  try {
    const { bookId } = req.params
    res.send(`Reserving book with id: ${bookId}`)
  } catch (err) {
    console.log(err)
  } finally {
    return
  }
})

bookRouter.post('/:bookId/reserve', (req: Request, res: Response) => {
  try {
    const { bookId } = req.params
    res.send(`You have successfully reserved this book with ID: ${bookId}`)
    console.log(`POST request to reserve book with ID: ${bookId}`)
  } catch (err) {
    console.log(err)
  } finally {
    return
  }
})

export default bookRouter
