import express from 'express'
import cors from 'cors'

import create_job from './routers/create_job'
import delete_job from './routers/delete_job'
import update_job from './routers/update_job'
import get_jobs from './routers/get_jobs'
const app = express()

app.use(cors())
app.use(express.json())

app.use(get_jobs)
app.use(create_job)
app.use(delete_job)
app.use(update_job)

app.listen(3000, () => {
    console.log("Listen server in port 3000")
})