const Footer:React.FC = () => {
    return (
        <footer className="flex sticky justify-between items-center w-full bg-slate-900 text-white p-8">
            <a href="/" className="font-bold text-4xl">RepoJobs</a>
            <section className="md:flex hidden gap-8 font-bold text-xl">
                <a href="/jobs">Jobs</a>
                <a href="/">Account</a>
            </section>
        </footer>
    )
}

export default Footer