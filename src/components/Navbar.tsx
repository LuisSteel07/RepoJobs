import { useState } from "react"

const Navbar:React.FC = () => {
    const [showMenu, setShowMenu] = useState(false)

    console.log(showMenu)

    return (
        <nav className="flex sticky justify-between items-center w-full bg-slate-800 text-white p-8">
            <a href="/" className="font-bold text-4xl">RepoJobs</a>
            <label htmlFor="navbar" className="md:hidden flex text-white">
                <img src="/list.svg" id="open" alt="menu-icon" className="w-6 h-6" />
            </label>
            <input type="checkbox" id="navbar" className="hidden" onChange={e => setShowMenu(!showMenu)}></input>
            {
                showMenu 
                ?
                    <section className="flex flex-col w-60 h-auto p-2 gap-1 -translate-x-60 bg-gray-950/90" id="menu">
                        <a href="/jobs">Jobs</a>
                        <a href="/">Example</a>
                        <a href="/">Example</a>
                    </section>
                : 
                    (
                        <></>
                    )
            }
            <section className="md:flex hidden gap-8 font-bold text-xl" id="menu">
                <a href="/jobs">Jobs</a>
                <a href="/">Example</a>
                <a href="/">Example</a>
            </section>
        </nav>
    )
}

export default Navbar