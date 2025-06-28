import express from 'express'
import db from '../db'

const app = express()
const delete_job = app.router

delete_job.delete('/delete_job', (req, res) => {
    const {id} = req.body
    db.run(`DELETE FROM Job WHERE id = ${id}`)

    res.send("Deleted Job")
})

export default delete_job