const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const stripeRoutes = require('./routes/stripe')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', stripeRoutes)

const PORT = process.env.PORT || 4242
app.listen(PORT, () => console.log('Server running on port ', PORT))