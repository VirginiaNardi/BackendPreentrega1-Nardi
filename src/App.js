import express from 'express'
import fs from 'fs'
import productsRouter from './routes/productsRouter.js'
import cartsRouter from './routes/cartsRouter.js'

const app = express()
app.use(express.json())

const PORT = 8080

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

app.listen( PORT, () => {
    console.log(`Server run on port ${PORT}`)
})