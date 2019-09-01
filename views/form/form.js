const style = require('./style')

module.exports = `
  ${style}
  <div id="n-form">
    <h2>Node JS Form</h2>
    <form action="save" method="post" enctype="multipart/form-data">
      <input type="text" name="title" placeholder="Title">
      <textarea rows="5" name="description" placeholder="Description"></textarea>
      <input type="file" name="uploaded_files">
      <input type="submit" value="Submit">
    </form>
  </div>
`
