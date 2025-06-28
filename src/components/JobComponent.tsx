import type { Job } from "../interfaces/Job"

const JobComponent:React.FC<Job> = ({id, title, text, contact, site}:Job) => {
    return (
        <article className="flex gap-4 flex-col w-[650px] bg-slate-800 rounded-2xl p-6 text-white" key={id}>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-xl">{text}</p>
            <p className="font-bold">Contactar: {contact}</p>
            <p className="font-bold">Creado: {site}</p>
        </article>
    )
}

export default JobComponent