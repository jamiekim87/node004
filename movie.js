const inquirer = require('inquirer')
const axios = require('axios')

inquirer.prompt({
  type: 'input',
  name: 'title',
  message: 'What is the title of the movie?'
})
  .then(({ title }) => {

    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${title}`)
      .then(({ data }) => {
        console.log(`
          ${data.Title}
          Directed by ${data.Director}
          
          ${data.Plot}
        `)
      })
      .catch(err => console.log(err))

  })
  .catch(err => console.log(err))