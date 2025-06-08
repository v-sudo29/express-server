/**
 * Mock database w/ query function
 */

const db = [
  { id: 1, name: 'Victoria' },
  { id: 2, name: 'Vi' },
  { id: 3, name: 'Victor' },
]

const getAuthorById = async (authorId) => {
  return db.find((author) => author.id === Number(authorId))
}

const getAllAuthors = async () => {
  return db.map((author) => author.name)
}

export default { getAuthorById, getAllAuthors }
