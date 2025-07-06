import { useEffect, useState } from "react"
import JobComponent from "../../components/job/JobComponent"
import type { Job } from "../../interfaces/Job"
import get_jobs from "../../requests/getJobs"
import SearchJob from "../../components/SearchJob"

const JobsView:React.FC = () => {
    const [jobs, setJobs] = useState<Array<Job>>([])
    const [search, setSearch] = useState("")
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
        <main className="flex flex-col items-center justify-center grow flex-wrap gap-8 p-4 mt-[80px]">
            <SearchJob search={search} setSearch={setSearch}/>
            <section className="flex md:flex-row flex-col items-center justify-center flex-wrap gap-8">
                {
                    search === ""
                    ?
                        jobs.map(e => (
                            <JobComponent id={e.id} title={e.title} text={e.text} contact={e.contact} site={e.site} key={e.id} />
                        ))
                    :
                        jobs.map((e) => {
                            if(e.title.includes(search)){
                                return (
                                    <JobComponent id={e.id} title={e.title} text={e.text} contact={e.contact} site={e.site} key={e.id} />
                                )
                            }
                        })
                }
            </section>
        </main>
    )
}

export default JobsView