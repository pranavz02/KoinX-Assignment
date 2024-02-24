import express from 'express'
import dotenv from 'dotenv'
import connectDb from"./config/connect.js"
import cors from "cors"
import schedule from 'node-schedule'
import coinRoutes from "./routes/coinRoutes.js"
import scheduler from "./controller/schedule.js"

dotenv.config()

connectDb()
const app = express();

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use("/api", coinRoutes)

// Schedule the job to run every hour
schedule.scheduleJob('0 * * * *', () => {
  scheduler();
});

app.get("/", (req, res)=> {
  res.send('API is running...')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})