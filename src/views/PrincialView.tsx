const PrincipalView:React.FC = () => {
    return (
        <section className="flex grow justify-center items-center mt-[80px] mb-[40px]">
            <article className="flex flex-col-reverse md:grid md:grid-cols-2 m-4 md:m-0 gap-8 bg-slate-200">
                <div className="flex flex-col w-auto md:w-[400px] p-4 self-center place-self-center">
                    <h1 className="text-4xl font-bold">RepoJobs</h1>
                    <p className="text-[20px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, id, consectetur numquam repudiandae vitae impedit quam neque distinctio dolorem in, esse voluptatibus est velit ipsum. Voluptatem, et repellendus? Iure, quidem atque. Nihil, expedita eos aliquid reiciendis quidem culpa sapiente recusandae deleniti, tempore, explicabo enim molestias.</p>
                </div>
                <img src="/header.webp" alt="header image" className="self-center place-self-center w-full sm:w-[420px] md:w-[480px]" />
            </article>
        </section>
    )
}

export default PrincipalView