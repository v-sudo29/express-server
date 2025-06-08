import fs from 'fs'
import asyncHandler from 'express-async-handler'

const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
]

const users = ['Rose', 'Cake', 'Biff']

export const getHomePage = asyncHandler(async (req, res) => {
  res.render('index', { message: 'EJS rocks!', links: links, users: users })
})

export const getAboutPage = asyncHandler(async (req, res) => {
  const page = fs.readFileSync('about.html', 'utf8')
  res.send(page)
})

export const getContactPage = asyncHandler(async (req, res) => {
  const page = fs.readFileSync('contact-me.html', 'utf8')
  res.send(page)
})
