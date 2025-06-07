import db from '../db'
import asyncHandler from 'express-async-handler'
import CustomNotFoundError from 'errors/CustomNotFoundError'

// The function will automatically catch any errors thrown and call the next function
export const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params

  const author = await db.getAuthorById(authorId)

  if (!author) {
    throw new CustomNotFoundError('Author not found')
  }

  res.send(`Author name: ${author.name}`)
})
