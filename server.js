var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
var cors = require('cors')
var connection = mysql.createConnection({
    // host :  "34.171.112.0",
    host : localhost,
    // socketPath : '/cloudsql/my-project-12345:us-central1:mydatabase',
    user :  "root",
    password : 'Team1234!',
    database : "ALLABOUTCINEMA"
});

connection.connect;
// connection.query('SET GLOBAL connect_timeout=28800')
// connection.query('SET GLOBAL interactive_timeout=28800')
// connection.query('SET GLOBAL wait_timeout=28800')
var app = express();

// setup 
app.use(express.json());
app.use(cors({origin: 'http://localhost:3066'}))
app.use(express.urlencoded({ extended: false }));

// get single movie with matching movieId
app.get('/movies/single', function (req, res) {
  var movieId = req.query.movie_id
  console.log('movieId: ' + movieId)
  var sql = `SELECT * from Movies WHERE movie_id='${movieId}'`

  connection.query(sql, function(err, result) {
    if (err) {
      res.send(err)
      return;
    } else {
      res.send(result)
      console.log(result)
    }
  });
})

// get reviews based on movie id
app.get('/reviews/contentId', function(req, res) {
  var contentId = req.query.contentId 
  var sql = `SELECT * from Reviews r WHERE r.content_id='${contentId}'`

  console.log(req.query)
    connection.query(sql, function(err, result) {
      if (err) {
        res.send(err)
        return;
      } else {
        res.send(result)
        console.log(result)
      }
    });
})


app.get('/movies', function(req, res) {
  //   var netid = req.body.netid;
  var releaseDate = req.query.release_year
  var genreMovie = req.query.genre
  var ratingsMovie = req.query.ratings
  var lenMovie = req.query.length

  var sql_read = `SELECT * from Movies WHERE release_year >= ${releaseDate} and genre = '${genreMovie}' and ratings >= ${ratingsMovie} and length >= ${lenMovie} LIMIT 10`
  sql = sql_read
  
  // console.log(sql);
  console.log('DATE RECEIVED BELOW:')
  console.log(req.query)
    connection.query(sql, function(err, result) {
      if (err) {
        res.send(err)
        return;
      } else {
        res.send(result)
        console.log(result)
      }
    });
  });

// this code is executed when a user clicks the form submit button
app.get('/advancedquery1', function(req, res) {
  //   var netid = req.body.netid;
  var actorName = req.body.actor_name
  var avgRating = req.body.ratings
  var releaseAfter = req.body.release_year
  var cinemaGenre = req.body.genre

  var sql_read = `SELECT actor_name, AVG(ratings) as avg_show_rating, AVG(release_year) as avg_release_year
  FROM Shows s JOIN Shows_Cast c ON s.show_id=c.show_id JOIN Actors a ON c.actor_Id=a.actor_Id
  GROUP BY actor_name
  HAVING AVG(ratings)>7
  ORDER BY avg_show_rating DESC
  LIMIT 15;`
  sql = sql_read
  
  console.log(sql);
    connection.query(sql, function(err, result) {
      if (err) {
        res.send(err)
        return;
      } else {
        res.send(result)
        console.log(result)
      }
    });
});

app.get('/advancedquery2', function(req, res) {
  //   var netid = req.body.netid;
  var actorName = req.body.actor_name
  var avgRating = req.body.ratings
  var releaseAfter = req.body.release_year
  var cinemaGenre = req.body.genre

  var sql_read = `SELECT movie_name, ratings FROM Movies m JOIN Movies_Cast c ON m.movie_id=c.movie_id JOIN Actors a ON c.actor_Id=a.actor_Id WHERE actor_name = 'Robert De Niro' AND ratings> (SELECT AVG(ratings) FROM Movies m1 JOIN Movies_Cast c1 ON m1.movie_id=c1.movie_id JOIN Actors a1 ON c1.actor_Id=a1.actor_Id WHERE actor_name = 'Robert De Niro') ORDER BY ratings DESC LIMIT 15;`
  sql = sql_read
  
  console.log(sql);
    connection.query(sql, function(err, result) {
      if (err) {
        res.send(err)
        return;
      } else {
        res.send(result)
        console.log(result)
      }
    });
});

app.get('/reviews', function(req, res) {
//   var netid = req.body.netid;

var sql_read = `SELECT * from Reviews`
sql = sql_read

console.log(sql);
  connection.query(sql, function(err, result) {
    if (err) {
      res.send(err)
      return;
    } else {
      res.send(result)
      console.log(result)
    }
  });
});

app.post('/reviews', function(request, response){
  var reviewId = request.body.review_id
  var userId = request.body.user_id
  var userRating = request.body.rating
  var contentId = request.body.content_id
  var reviewText = request.body.review_text
  var sql = `INSERT INTO Reviews (review_id, user_id, rating, content_id, review_text) VALUES (${reviewId},${userId}, ${userRating}, '${contentId}', '${reviewText}');`

  console.log(sql);
  connection.query(sql, function(err, result) {
    if (err) {
      response.send(err)
      return;
    } else {
      response.send(result)
      console.log(result)
    }
  });
});

app.delete('/reviews', function(request, response){
  var reviewId = request.body.review_id
  var userId = request.body.user_id
  var userRating = request.body.rating
  var contentId = request.body.content_id
  var reviewText = request.body.review_text
  var sql = `DELETE FROM Reviews WHERE review_id = ${reviewId};`

  console.log(sql);
  connection.query(sql, function(err, result) {
    if (err) {
      response.send(err)
      return;
    } else {
      response.send(result)
      console.log(result)
    }
  });
});

app.put('/reviews', function(request, response){
  var reviewId = request.body.review_id
  var userId = request.body.user_id
  var userRating = request.body.rating
  var contentId = request.body.content_id
  var reviewText = request.body.review_text
  // var sql = `UPDATE Reviews SET rating=${userRating}, review_text='${reviewText}' WHERE review_id = ${reviewId};`
  var sql = `UPDATE Reviews SET review_text='${reviewText}' WHERE review_id = ${reviewId};`

  console.log(sql);
  connection.query(sql, function(err, result) {
    console.log(connection)
    if (err) {
      response.send(err)
      console.log(err)
      return;
    } else {
      response.send(result)
      console.log(result)
    }
    connection.end()
  });
});

app.listen(3306, function () {
    console.log('Node app is running on port 3306');
});