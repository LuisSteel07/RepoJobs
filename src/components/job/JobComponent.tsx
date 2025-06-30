import type { Job } from "../../interfaces/Job"

const JobComponent:React.FC<Job> = ({id, title, text, contact, site}:Job) => {
    return (
        <article className="flex gap-4 flex-col w-[650px] bg-slate-600 text-white" key={id}>
            <div className="w-full bg-slate-700 p-4">
                <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <div className="p-4 flex flex-col gap-4">
                <p className="text-xl">{text}</p>
                <p className="font-bold">Contactar: {contact}</p>
                <p className="font-bold">Creado: {site}</p>
            </div>
        </article>
    )
}

export default JobComponent