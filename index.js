import { app } from './server.js'
import mongoose from 'mongoose'

const port = 3000

try {
  await mongoose.connect("mongodb+srv://ecsproull765:9wMNPgo4IofE1HWM@nodejs-for-beginners.1ss5p.mongodb.net/")
  console.log('Connected to MongoDB')
  app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`)
  })
} catch (error) {
  console.error(error)
}
