const express = require('express')
const router = require('./routes')
const middlewares = require('./middlewares')

const { PORT } = require('../config').moderation

const app = express()

app.use(middlewares)
app.use(router)

app.listen(PORT, () => console.log(`Moderation service 👂 on port ${PORT}`))
