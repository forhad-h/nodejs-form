module.exports = `
  <style>
    #data-list-container {
      max-width: 90%;
      width: 500px;
      margin: 0 auto;
      margin-top: 3%;
    }
    #data-list-container h2 {
      margin-top: 0;
      margin-bottom: 15px;
      color: #333;
      font-family: sans-serif;
    }
    #data-list-container .list-single {
      border: 1px solid #530053;
      padding: 10px;
      margin-bottom: 15px;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: -3px 4px 5px rgba(0,0,0,0.12)
    }
    #data-list-container .list-image {
      width: 150px;
      margin-right: 2%;
      float: left;
    }
    #data-list-container .list-image img {
      width: 100%;
      border-radius: 10px;
    }
    #data-list-container .list-content {
      width: calc(98% - 150px);
      float: left;
    }
    #data-list-container .list-content h3 {
      margin-top: 0;
      margin-bottom: 10px;
      text-transform: capitalize;
      font-family: sans-serif;
      color: #333;
    }
    #data-list-container .list-content p {
      margin-top: 0;
      margin-bottom: 10px;
    }
  </style>
`
