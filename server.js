const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(3000, () => console.log('Server ON: 3000'))
