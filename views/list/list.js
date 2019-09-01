const style = require('./style')

module.exports = `
  ${style}
  <div id="data-list-container">
    <h2>All Data</h2>
    {{#data}}
    <div class="list-single">
    <div class="list-image">
      <img src="{{file_path}}"/>
    </div>
    <div class="list-content">
      <h3>{{title}}</h3>
      <p>{{description}}</p>
    </div>
    </div>
    {{/data}}
  </div>
`
