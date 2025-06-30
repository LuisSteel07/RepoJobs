const PrincipalView:React.FC = () => {
    return (
        <section className="flex flex-col grow justify-center items-center">
            <article className="m-4 bg-slate-200 flex flex-col-reverse md:flex-row gap-8 w-auto md:w-[770px]">
                <div className="flex flex-col w-auto md:w-[400px] p-4">
                    <h1 className="text-4xl font-bold">RepoJobs</h1>
                    <p className="text-[20px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, id, consectetur numquam repudiandae vitae impedit quam neque distinctio dolorem in, esse voluptatibus est velit ipsum. Voluptatem, et repellendus? Iure, quidem atque. Nihil, expedita eos aliquid reiciendis quidem culpa sapiente recusandae deleniti, tempore, explicabo enim molestias.</p>
                </div>
                <img src="/header.webp" alt="header image" width={360} />
            </article>
        </section>
    )
}

export default PrincipalView