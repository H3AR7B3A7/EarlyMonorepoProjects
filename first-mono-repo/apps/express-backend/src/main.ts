import * as express from 'express'
import { API_URL, ApiResponse } from '@first-mono-repo/backend-interface'

const app = express()

app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to express-backend!' } as ApiResponse)
})

const port = process.env.port || 3333
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
