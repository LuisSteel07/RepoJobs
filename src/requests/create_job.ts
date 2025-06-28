import type { Job } from "../interfaces/Job";

async function create_job(job: Job) {
    fetch('http://localhost:3000/create_job', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
    })
    .then(res => {
        if (!res.ok) throw new Error('Error en la solicitud');
        return res.json();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.log(error)
    })
}

export default create_job