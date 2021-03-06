const http = require('http')
const _ = require('lodash')
const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')

//form
const saveData = require('./saveData')
const htmlForm = require('./views/form/form')
const formTemplate = Handlebars.compile(htmlForm)
const getFormData = require('./sqlite3/getAllData')

//list
const list = require('./views/list/list')
const listTemplate = Handlebars.compile(list)

const formDataFields = `
  title text,
  description text,
  file_path text
`
require('./sqlite3/createTable')('form_data', formDataFields)

const server = http.createServer((req, res) => {
  const isPngFile = /.png$/.test(req.url)
  const isJpegFile = /.jpg$/.test(req.url) || /.jpeg$/.test(req.url)
  const isGifFile = /.gif$/.test(req.url)

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(formTemplate())
    return res.end()
  }
  if (req.url === '/save') {
    saveData(req, res)
  }

  if (req.url === '/all') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    getFormData('form_data')
      .then(result => {
        res.write(listTemplate({ data: result }))
        res.end()
      })
      .catch(err => console.log(err))
  }
  if (isPngFile || isJpegFile || isGifFile) {
    const imagePath = path.join(__dirname, req.url)
    var fileStream = fs.createReadStream(imagePath)
    if (isPngFile) {
      res.writeHead(200, { 'Content-Type': `image/png` })
    } else if (isJpegFile) {
      res.writeHead(200, { 'Content-Type': `image/jpeg` })
    } else if (isGifFile) {
      res.writeHead(200, { 'Content-Type': `image/gif` })
    }
    fileStream.pipe(res)
  }
})

if (!_.isEmpty(server.listen(8080))) {
  console.log('🚀  Run server on: http://localhost:8080')
}
