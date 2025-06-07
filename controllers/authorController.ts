import db from '../db'
import asyncHandler from 'express-async-handler'

// The function will automatically catch any errors thrown and call the next function
export const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params
  throw new Error('test error!')
  const author = await db.getAuthorById(authorId)

  if (!author) {
    res.status(404).send('Author not found')
    return
  }

  res.send(`Author name: ${author.name}`)
})
