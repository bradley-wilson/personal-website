import express from 'express'
import nodemailer from 'nodemailer'
import validator from 'validator'
import xssFilters from 'xss-filters'

const app = express()

app.use(express.json())

app.post('/', function (req, res) {
  sendMail(req.body.name, req.body.email, req.body.message)
  res.status(200).json({ 'message': 'Success!' })
})

export default {
  path: '/api/contact',
  handler: app
}

const sendMail = (name, email, message) => {
  let transporter = nodemailer.createTransport({
    service: 'Zoho',
    auth: {
      user: 'contact@bradwilsonphd.com',
      pass: 'wade$1Novel$Sloe9'
    }
  })
  transporter.sendMail({
    from: name + '<contact@bradwilsonphd.com>',
    replyTo: {
      name: name,
      address: email
    },
    to: 'admin@bradwilsonphd.com, info@bradwilsonphd.com, team@bradwilsonphd.com',
    subject: 'New contact form message',
    text: message
  })
}
