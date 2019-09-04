const formidable = require('formidable')
const path = require('path')
const fs = require('fs')
const insertData = require('./sqlite3/insertData')
const { exec } = require('child_process')

module.exports = (req, res) => {
  const mediaDirName = 'media'
  const fileDir = path.join(__dirname, mediaDirName)
  const form = new formidable.IncomingForm()

  // make folder for media files
  if (!fs.existsSync(`./${mediaDirName}`)) {
    fs.mkdirSync(`./${mediaDirName}`)
  }

  // change temporary upload directory of formidable
  form.uploadDir = fileDir

  // parse to form data with formidable
  form.parse(req, (err, fields, files) => {
    if (err) throw err

    const validRequest =
      fields.title || fields.description || files.uploaded_files.name

    // if all fields of the form is empty
    if (!validRequest) {
      exec('rm -rf ./media/upload_*')
      res.writeHead(301, { Location: '/' })
      return res.end()
    }
    const fileOldPath = files.uploaded_files.path
    const fileNewPath = path.join(fileDir, files.uploaded_files.name)

    let title = ''
    let description = ''
    let filePath = ''

    if (fields.title) {
      title = fields.title
    }
    if (fields.description) {
      description = fields.description
    }
    if (files.uploaded_files.name) {
      filePath = path.join(mediaDirName, files.uploaded_files.name)

      // save image into server
      fs.rename(fileOldPath, fileNewPath, err => {
        if (err) throw err
      })
    }
    // insert form data into database
    insertData('form_data', [title, description, filePath])
      .then(result => {
        res.writeHead(301, { Location: '/all' })
        res.end()
      })
      .catch(err => {
        console.log(err)
        res.end()
      })
  })
}
