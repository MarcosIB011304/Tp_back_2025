const getUsers = async () => {
    const response = await fetch('https://localHost8080') // se conecta con la api
    const data = await response.json()
    console.log('data',data)
    return data
}

const getFilterUser = async (email) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?email=${email}') ;// se conecta con la api
    const data = await response.json()
    return data

}


function cargarElementos(elementos) {
    const tabla = document.getElementById('datos')
    for (let elemento of elementos) {
        const row = `
        <td scope="row">${elemento.id}</td>
        <td>${elemento.email}</td>
        <td>${elemento.website}</td>
        <td>${elemento.name}</td>
        `;
        const nuevaFila = tabla.insertRow(tabla.rows.length);
        nuevaFila.innerHTML = row
    }
}

const cargarFiltrados = () => {
        const filtrados = await getFilterUser(texto)
        
    cargarElementos(filtrados)
}

document.addEventListener('DOMContentLoaded', async function (e) {
    const usuarios = await getUsers();
  cargarElementos(usuarios);
    console.log('holaaaa');
    const btnFiltrar = document.getElementById('btnFiltrar');
    btnFiltrar.addEventListener('click', function(event){
        // console.log('click event', event)
        const textoIngresado = document.getElementById('textoafiltrar').value.trim()
        cargarFiltrados(textoIngresado)
    })
});

