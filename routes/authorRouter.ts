import { Router } from 'express'
import { getAllAuthors, getAuthorById } from '../controllers/authorController'

const authorRouter = Router()

authorRouter.get('/', getAllAuthors)

authorRouter.get('/:authorId', getAuthorById)

export default authorRouter
