/**
 * Mock database w/ query function
 */

const db = [
  { id: 1, name: 'Victoria', book: 'Book 1', bookId: 11 },
  { id: 2, name: 'Vi', book: 'Book 2', bookId: 22 },
  { id: 3, name: 'Victor', book: 'Book 3', bookId: 33 },
]

const getAuthorById = async (authorId) => {
  return db.find((author) => author.id === Number(authorId))
}

const getAllAuthors = async () => {
  return db.map((author) => author.name)
}

const getBookById = async (bookId) => {
  return db.find((book) => book.bookId === bookId)
}

const getAllBooks = async () => {
  return db.map((book) => book.book)
}

export default {
  getAuthorById,
  getAllAuthors,
  getBookById,
  getAllBooks,
}
