import { app } from './server.js'
import mongoose from 'mongoose'

const port = process.env.PORT
try {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')
  app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`)
  })
} catch (error) {
  console.log("Error reported from index.js")
  console.log("Process UIR: " + process.env.MONGODB_URI)
  console.error(error)
}
