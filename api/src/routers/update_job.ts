import express from 'express'
import db from '../db'

const app = express()
const update_job = app.router

update_job.patch('/update_job', (req, res) => {
    const {id, title, text, contact, site} = req.body

    db.run(`UPDATE Job SET title = ${title}, text = ${text}, contact = ${contact}, site = ${site} WHERE id = ${id}`)

    res.send("Updated Job")
})

export default update_job