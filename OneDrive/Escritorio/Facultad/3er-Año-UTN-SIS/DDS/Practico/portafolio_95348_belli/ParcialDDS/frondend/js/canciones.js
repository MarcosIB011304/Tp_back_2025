
function ObtenerSegundos(mili){
    const segundos = mili/1000;
    const minute = segundos/60
    minute = Math.trunc(minute)
    segundos = minute - (segundos/60)
    segundos = segundos * 60

    return {minute,segundos}
}

async function ObtenerCanciones(){
    try {
        const cancion = await cargarCanciones();
        const tabla = document.getElementById("datos")
        
        tabla.innerHTML = ` `
        cancion.forEach(e => {
            const minutos = Math.floor(e.milliseconds / 60000);
            const segundos = Math.floor((e.milliseconds % 60000)/1000);
            const miliseg = `${minutos}:${segundos}`
            const op = `
            <th scope="row">${e.tracks_id}</th> // poner mismo nombre e."" de inciacion de bd, no El nombre columna
                  <td>${e.name} 1</td>
                  <td>${e.album}</td>
                  <td>${e.artist_name}</td>
                  <td>${e.gendre}</td>
                  <td>${miliseg}</td>
            `;
            tabla.innerHTML += op
            });

    } catch (error) {console.log(error)
        
    }
};


async function cargarCanciones(){
    const resp = await fetch("http://localhost:3001/tracks");
    const data = await resp.json();
    return data
}


document.addEventListener("DOMContentLoaded",async function(e){
     await ObtenerCanciones();
})