const { prompt } = require('inquirer')
const { writeFile } = require('fs')

prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where are you located?'
  },
  {
    type: 'input',
    name: 'bio',
    message: 'Please write a short bio:'
  },
  {
    type: 'input',
    name: 'linkedIn',
    message: 'Enter your LinkedIn URL:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github URL:'
  }
])
  .then(({ name, location, bio, linkedIn, github }) => {
    writeFile('portfolio.html', `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio Page</title>
      </head>
      <body>
        <h1>Name: ${name}</h1>
        <h2>Location: ${location}</h2>
        <p>Bio: ${bio}</p>
        <a href="${linkedIn}">LinkedIn</a>
        <a href="${github}">Github</a>
      </body>
    </html>
    `, err => {
      if (err) { console.log(err) }
      console.log('Portfolio Page Created!')
    })
  })
  .catch(err => console.log(err))