require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const logger = require('morgan')
const path = require('path')
const session = require('./config/session.config')
const passport = require('./config/passport.config')

require('./config/db.config')
require('./config/hbs.config')

// const app_name = require('./package.json').name;
// const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

// bind user to view - locals
const routeGuard = require('./middlewares/session.middleware')

// Routers
const indexRouter = require('./routes/index.routes')
const authRouter = require('./routes/auth.routes')
const crudRouter = require('./routes/crud.routes')
const commentsRouter = require('./routes/comments.routes')
const socialRouter = require('./routes/social.routes')
const adminRouter = require('./routes/admin.routes')
const apiRouter = require('./routes/api.routes')

const app = express()

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session)
app.use(passport)
app.use(routeGuard.isNotAuthenticated)

// // Express View engine setup
// app.use(
//   require('node-sass-middleware')({
//     src: path.join(__dirname, 'public'),
//     dest: path.join(__dirname, 'public'),
//     sourceMap: true
//   })
// )

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

// Routes middleware
app.use('/', indexRouter)
app.use('/', authRouter)
app.use('/', crudRouter)
app.use('/', commentsRouter)
app.use('/', socialRouter)
app.use('/', adminRouter)
app.use('/', apiRouter)

module.exports = app
