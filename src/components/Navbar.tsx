const Navbar:React.FC = () => {
    return (
        <nav className="flex sticky justify-between items-center w-full bg-slate-800 text-white p-8">
            <a href="/" className="font-bold text-4xl">RepoJobs</a>
            <section className="flex gap-8 font-bold text-xl">
                <a href="/jobs">Jobs</a>
                <a href="/">Example</a>
                <a href="/">Example</a>
            </section>
        </nav>
    )
}

export default Navbar