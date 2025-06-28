import express from 'express'
import db from '../db'
import {Job} from '../models/Job'

const app = express()
const get_jobs = app.router

get_jobs.get('/get_jobs', (req, res) => {
    
    db.all("SELECT * FROM Job", [], (error, rows: Array<Job>) => {
        if(error){
            console.error(error)
        }

        let list_jobs: Array<Job> = rows.map((row: Job) => row)

        res.json(list_jobs)
    })
})

export default get_jobs