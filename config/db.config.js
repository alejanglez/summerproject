const mongoose = require('mongoose')
// const MONGODB_URI =
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tweet-hack'

mongoose
  .connect('mongodb://localhost/summer-project', { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err)
  })

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected on app termination')
      process.exit(0)
    })
  })
