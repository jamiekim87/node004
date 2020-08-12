const { prompt } = require('inquirer')
const { writeFile } = require('fs')

prompt([
    {
        type: 'input',
        name: 'name',
        messsage: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        messsage: 'Where are you located?'
    },
    {
        type: 'input',
        name: 'bio',
        messsage: 'Please write a short bio:'
    },
    {
        type: 'input',
        name: 'linkedIn',
        messsage: 'Enter your LinkedIn URL:'
    },
    {
        type: 'input',
        name: 'github',
        messsage: 'Enter your Github URL:'
    }
])
    .then(({ name, location, bio, linkedIn, github }) => {
        writeFile('portfolio.html', `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
             <h1>Name: ${name}</h1>
            <h2>Location: ${location} </h2>
            <p>Bio: ${bio}</p>
            <a href= "${linkedIn}">LinkedIn</a>
            <a href="${github}">Github</a>
        </body>
        </html>
    })
    .catch(err => console.log(err))

