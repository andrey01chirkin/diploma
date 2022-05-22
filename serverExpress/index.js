const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const router = require('./server/router.js')

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.listen(port, () => {
    console.log(`Server is started on port ${port}`)
})