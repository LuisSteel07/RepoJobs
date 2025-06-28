async function get_jobs(setter: Function){
    const res = await fetch('http://localhost:3000/get_jobs')
        .then((response) => {
            if(!response.ok) if(!response.ok) throw new Error('No se pudo obtener los datos');

            return response.json()
        })

    setter(res)
}

export default get_jobs