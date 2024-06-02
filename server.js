import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import genreRoutes from './routes/genreRoutes.js'
import movieRoutes from './routes/movieRoutes.js'
import cors from 'cors'

dotenv.config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/genre', genreRoutes)
app.use('/api/v1/movie', movieRoutes)

app.get("/", (req, res) => {
    res.send("<h1>Welcome to movies library</h1>");
})

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`.bgCyan.white)
})