import asyncHandler from 'express-async-handler'
import db from '../db'
import CustomNotFoundError from 'errors/CustomNotFoundError'

export const getBookById = asyncHandler(async (req, res) => {
  const { bookId } = req.params

  const book = await db.getBookById(bookId)

  if (!book) {
    throw new CustomNotFoundError('Book not found :(')
  }

  res.send(`Book found: ${book.book}`)
})

export const getAllBooks = asyncHandler(async (req, res) => {
  const allBooks = await db.getAllBooks()

  res.send(`All books: ${allBooks.join(', ')}`)
})
