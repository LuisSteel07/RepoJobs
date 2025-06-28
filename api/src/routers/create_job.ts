import express, { Router } from 'express'
import db from '../db'
const app = express()

const create_job: Router = app.router

create_job.post("/create_job", (req, res) => {
    const {title, text, contact, site} = req.body

    db.run(`INSERT INTO Job (title, text, contact, site) VALUES('${title}', '${text}', '${contact}', '${site}');`)

    res.send("Created Job")
})

export default create_job