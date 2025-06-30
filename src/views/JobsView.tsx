import { useEffect, useState } from "react"
import JobComponent from "../components/job/JobComponent"
import type { Job } from "../interfaces/Job"
import get_jobs from "../requests/getJobs"

const JobsView:React.FC = () => {
    const [jobs, setJobs] = useState<Array<Job>>([])
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        try {
            get_jobs(setJobs)
        } catch (error) {
            console.log(error)
        } finally {
            setCargando(false)
        }
    }, [])

    if (cargando) {
        return <p>Cargando usuarios...</p>;
    }

    return (
        <main className="flex justify-center grow flex-wrap gap-8 p-4">
            {
                jobs.map(e => (
                    <JobComponent id={e.id} title={e.title} text={e.text} contact={e.contact} site={e.site} key={e.id} />
                ))
            }
        </main>
    )
}

export default JobsView