const express = require('express')
const router = require('./routes')
const middlewares = require('./middlewares')

const { PORT } = require('../config')['event-bus']

const app = express()

app.use(middlewares)
app.use(router)

app.listen(PORT, () => console.log(`Event bus service 👂 on port ${PORT}`))
