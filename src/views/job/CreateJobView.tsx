import { useState } from "react"
import type { Job } from "../../interfaces/Job"
import { ToastContainer, toast } from "react-toastify"
import create_job from "../../requests/create_job"

const CreateJobView:React.FC = () => {
    const [title, setTitle] = useState<string>("")
    const [text, setText] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [site, setSite] = useState<string>("")
    // const [date, setDate] = useState<string>("")

    const handle_post = () => {
        try {
            if(title == "" || text == "" || contact == "" || site == "") throw new Error("Debe de ingresar los valores")
        
            const job: Job = {
                'id': 0,
                'title': title, 
                'text': text, 
                'contact': contact, 
                'site': site
            } 
            create_job(job)
        } catch(error) {
            toast(`${error}`)
        }
    }

    return (
        <section className="flex flex-col justify-center items-center pt-4 pb-4">
            <h1 className="text-2xl font-bold pb-2">Creating Job</h1>
            <article className="flex flex-col gap-4 text-white bg-slate-700 w-[600px] justify-center p-4">
                <label htmlFor="title">
                    <p className="text-2xl font-bold">Title</p>
                    <input type="text" name="title" id="title" required className="p-2 bg-slate-500 w-full" onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label htmlFor="text">
                    <p className="text-2xl font-bold">Text</p>
                    <textarea name="text" id="text" required className="p-2 bg-slate-500 w-full" maxLength={600} onChange={(e) => setText(e.target.value)}></textarea>
                </label>
                <label htmlFor="contact">
                    <p className="text-2xl font-bold">Contact</p>
                    <input type="text" name="contact" id="contact" required className="p-2 bg-slate-500 w-full" onChange={(e) => setContact(e.target.value)}/>
                </label>
                <label htmlFor="site">
                    <p className="text-2xl font-bold">Site</p>
                    <input type="text" name="site" id="site" required className="p-2 bg-slate-500 w-full" onChange={(e) => setSite(e.target.value)}/>
                </label>
                <label htmlFor="date">
                    <p className="text-2xl font-bold">Date</p>
                    <input type="date" name="date" id="date" required className="p-2 bg-slate-500 w-full"/>
                </label>
                <button type="submit" className="bg-green-700 w-[120px] p-2" onClick={handle_post}>Create Job</button>
            </article>
            <ToastContainer theme="dark"/>
        </section>
    )
}

export default CreateJobView