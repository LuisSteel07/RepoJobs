const get_jobs = async () => {
    try {
        const res = await fetch('http://localhost:3000/get_jobs')
            .then((response) => {
                if(!response.ok) if(!response.ok) throw new Error('No se pudo obtener los datos');

                return response.json()
            })
        return res
    } catch (error) {
        console.log(error)
    }
}

export default get_jobs