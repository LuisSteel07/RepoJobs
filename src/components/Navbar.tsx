import { useState } from "react"

const Navbar:React.FC = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="flex sticky justify-between items-center w-full bg-slate-800 text-white p-8">
            <a href="/" className="font-bold text-4xl">RepoJobs</a>
            <section className="lg:hidden flex flex-col w-10 h-10">
                <label htmlFor="navbar" className="md:hidden flex text-white">
                    <img src="/list.svg" id="open" alt="menu-icon" className="w-6 h-6" />
                </label>
                <input type="checkbox" id="navbar" className="hidden" onChange={e => setShowMenu(!showMenu)}></input>
                {
                    showMenu 
                    ?
                        <div className="flex-col w-60 h-auto p-2 gap-1 -translate-x-60 bg-gray-950/90" id="menu">
                            <a href="/jobs" className="flex flex-row justify-center items-center p-3 text-xl font-bold text-white self-center place-self-center">Jobs</a>
                            <a href="/" className="flex flex-row justify-center items-center p-3 text-xl font-bold text-white self-center place-self-center">Example</a>
                            <a href="/" className="flex flex-row justify-center items-center p-3 text-xl font-bold text-white self-center place-self-center">Example</a>
                        </div>
                    : 
                        (
                            <></>
                        )
                }
            </section>
            <section className="md:flex hidden gap-8 font-bold text-xl" id="menu">
                <a href="/jobs">Jobs</a>
                <a href="/">Account</a>
            </section>
        </nav>
    )
}

export default Navbar