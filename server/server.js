const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
  {
    "Title":"End of Watch",
    "Released":"2012-09-21",
    "Runtime":109,
    "Genres":["Action", "Crime", "Drama"],
    "Directors":["David Ayer"],
    "Writers":["David Ayer"],
    "Actors":["Jake Gyllenhaal, Michael Peña, Anna Kendrick"],
    "Plot":"Shot documentary-style, this film follows the daily grind of two young police officers in LA who are partners and close friends.",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjU0ODU5Ml5BMl5BanBnXkFtZTcwNjI4MzAyOA@@._V1_SX300.jpg",
    "Metascore":68,
    "imdbRating":7.6 },

  {
     "Title" :"Shutter Island",
     "Released":"2010-02-19",
     "Runtime":138,
     "Genres":["Drama", "Mystery", "Thriller"],
     "Directors":["Martin Scorsese"],
     "Writers":["Laeta Kalogridis, Dennis Lehane"],
     "Actors":["Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo"],
     "Plot":"Two US marshals are sent to a mental institution on an inhospitable island in order to investigate the disappearance of a patient.",
     "Poster":"https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_SX300.jpg",
     "Metascore":63,
     "imdbRating":8.2 },

     {
     "Title": "Materialists",
      "Released": "2025-06-13",
      "Runtime": 116,
      "Genres": ["Comedy", "Drama", "Romance"],
      "Directors": ["Celine Song"],
      "Writers": ["Celine Song"],
      "Actors": ["Dakota Johnson", "Chris Evans", "Pedro Pascal"],
      "Plot": "An ambitious young New York City matchmaker finds herself torn between the perfect match and her imperfect ex.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmQxMTI1YmEtOGY3Yi00NzVlLWEzMjAtYTI1NWZkNDFiMDg1XkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 70,
      "imdbRating": 6.3
}
  ]
      res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

