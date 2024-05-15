const getBarrios = async() => {
    const bar = await fetch('http://localhost:3001/barrios')
    const data = await bar.json()
    return data
}

const getEstaciones = async() => {
    const est = await fetch('http://localhost:3001/estaciones')
    const data = await est.json()
    return data
}

const cargarBarrios = async() => {
    try{
        const bar = await getBarrios()
        const form = document.querySelector('#barrio')
        form.innerHTML = ' '
        bar.forEach(element => {
            const opt = `
            <option>${element.nombre}</option>
            `
            form.innerHTML += opt
        });
    
    }catch(error){console.log(error)}
}

const cargarEstaciones = async() => {
    try{
        const est = await getEstaciones()
        const tabla = document.querySelector('#datos')
        tabla.innerHTML=''
        est.forEach(e => {
            const row = `
            <tr>
            <th>${e.id}</th>
            <td>${e.nombre}</td>
            <td>${e.direccion}</td>
            <td>${e.id_barrio}</td>
            <td>${e.activa}</td>
            </tr> 
            `
            tabla.innerHTML += row
        })}catch(error){console.log(error)}
}


document.addEventListener('DOMContentLoaded', async() => {
    try{
        cargarBarrios()

        const boton = document.querySelector('#boton')
        boton.addEventListener('click',cargarEstaciones)
    
    }catch(error){console.log(error)}
})