import db from '../db'
import asyncHandler from 'express-async-handler'
import CustomNotFoundError from 'errors/CustomNotFoundError'

/**
 * Authors controllers
 * */
// The function will automatically catch any errors thrown and call the next function
export const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params

  const author = await db.getAuthorById(authorId)

  if (!author) {
    throw new CustomNotFoundError('Author not found :(')
  }

  res.send(`Author name: ${author.name}`)
})

export const getAllAuthors = asyncHandler(async (req, res) => {
  const allAuthors = await db.getAllAuthors()

  if (!allAuthors) {
    throw new CustomNotFoundError('There are no authors :(')
  }

  res.send(`All authors: ${allAuthors.join(', ')}`)
})

/**
 * Book controllers
 * */

export const getBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params

  const book = await db.getBookById(bookId)

  if (!book) {
    throw new CustomNotFoundError('Book not found :(')
  }

  res.send(`Book name: ${book.name}`)
})
