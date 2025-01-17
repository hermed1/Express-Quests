// const movies = [
//   {
//     id: 1,
//     title: 'Citizen Kane',
//     director: 'Orson Wells',
//     year: '1941',
//     colors: false,
//     duration: 120,
//   },
//   {
//     id: 2,
//     title: 'The Godfather',
//     director: 'Francis Ford Coppola',
//     year: '1972',
//     colors: true,
//     duration: 180,
//   },
//   {
//     id: 3,
//     title: 'Pulp Fiction',
//     director: 'Quentin Tarantino',
//     year: '1994',
//     color: true,
//     duration: 180,
//   },
// ];

const database = require('./database');

const getMovies = (req, res) => {
  database
    .query('select * from movies')
    .then(([movies]) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query('select * from movies where id = ?', [id])
    .then(([movies]) => {
      if (movies[0] != null) {
        res.json(movies[0]);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query('select * from users where id = ?', [id])
    .then(([user]) => {
      if (user[0] != null) {
        res.status(200).json(user[0]);
      } else {
        res.status(404).send('not found');
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error retrieving data from database');
    });
};

const getUsers = (req, res) => {
  database
    .query('select * from users')
    .then(([users]) => res.status(200).json(users));
};

const postMovie = (req, res) => {
  const { title, director, year, color, duration } = req.body;

  database
    .query(
      'INSERT INTO movies(title, director, year, color, duration) VALUES (?, ?, ?, ?, ?)',
      [title, director, year, color, duration]
    )
    .then(([result]) => {
      res.location(`/api/movies/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the movie');
    });
};

const postUsers = (req, res) => {
  const { firstname, lastname, email, city, language } = req.body;
  database
    .query(
      'INSERT INTO users(firstname, lastname, email, city, language) VALUES (?,?,?,?,?)',
      [firstname, lastname, email, city, language]
    )
    .then(([result]) => {
      res.location(`/api/users/${result.insertID}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('error saving the user');
    });
};

module.exports = {
  getMovies,
  getMovieById,
  getUsers,
  getUserById,
  postMovie,
  postUsers,
};
