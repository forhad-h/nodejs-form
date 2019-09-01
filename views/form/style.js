module.exports = `
  <style>
    #n-form {
      width: 90%;
      max-width: 500px;
      margin: 0 auto;
      background-color: #530053;
      border-radius: 5px;
      padding: 20px;
      margin-top: 5%;
      text-align: center;
      -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.15);
      -moz-box-shadow: 0 0 20px rgba(0,0,0,0.15);
      -o-box-shadow: 0 0 20px rgba(0,0,0,0.15);
      box-shadow: 0 0 20px rgba(0,0,0,0.15);
    }
    #n-form h2 {
      margin-top: 0;
      margin-bottom: 15px;
      color: #eee;
      font-family: sans-serif;
    }
    #n-form form {
      margin-bottom: 0;
    }
    #n-form input[type=text],
    #n-form textarea,
    #n-form input[type=file] {
      width: 90%;
      margin: 15px auto 15px;
      border: 0 none;
      padding: 5px 10px;
      background-color: #eee;
      display: block;
      color: #666;
      border-radius: 3px;
      font-size: 16px;
    }
    #n-form input[type=file] {
      cursor: pointer;
    }
    #n-form input[type=submit] {
      display: inline-block;
      border: 0 none;
      padding: 10px 20px;
      font-size: 18px;
      text-transform: uppercase;
      border-radius: 3px;
      background: transparent;
      border: 2px solid #E2D338;
      color: #E2D338;
      cursor: pointer;
      -webkit-transition: 0.25s linear;
      -moz-transition: 0.25s linear;
      -o-transition: 0.25s linear;
      transition: 0.25s linear;
      margin-top: 10px;
    }
    #n-form input[type=submit]:hover {
      background-color: #E2D338;
      border: 2px solid transparent;
      color: #333;
    }
  </style>
`
