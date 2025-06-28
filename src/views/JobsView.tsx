import { useEffect, useState } from "react"
import JobComponent from "../components/JobComponent"
import type { Job } from "../interfaces/Job"

const JobsView:React.FC = () => {
    const [jobs, setJobs] = useState<Array<Job>>([])
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const get_jobs = async () => {
            try {
                const res = await fetch('http://localhost:3000/get_jobs')
                    .then((response) => {
                        if(!response.ok) if(!response.ok) throw new Error('No se pudo obtener los datos');

                        return response.json()
                    })
                
                setJobs(res)
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false)
            }
        }

        get_jobs()
    }, [])

    if (cargando) {
        return <p>Cargando usuarios...</p>;
    }

    return (
        <main className="flex justify-center grow flex-wrap gap-8 p-4">
            {
                jobs.map(e => (
                    <JobComponent id={e.id} title={e.title} text={e.text} contact={e.contact} site={e.site} />
                ))
            }
        </main>
    )
}

export default JobsView