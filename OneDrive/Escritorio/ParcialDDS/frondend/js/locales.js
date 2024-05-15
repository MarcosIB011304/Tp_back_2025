function limpiarTabla(tabla){
    while(tabla.rows.length > 0 ){
        tabla.deleteRow(0)
    }
}

async function cargarLocales(){
    const tablebody = document.getElementById("datos");
    limpiarTabla(tablebody);
    try {
        const locales = await ObtenerLocales();
        locales.forEach(element => {
            const fila = `
            <th scope="row">${element.StoreNumber}</th>
                  <td>${element.StoreName}</td>
                  <td>${element.Street_Address}</td>
                  <td>${element.City}</td>
                  <td>${element.Longitude}</td>
                  <td>${element.Latitude}</td> `;
            const textoFila = tablebody.insertRow(tablebody.rows.length);
            textoFila.innerHTML = fila
        })
        
        
    } catch (error) {
        console.log(error)
        
    }
};



async function cargarLocalesInterior(){
    const boton = document.getElementById("botonLista");
    try {
        boton.addEventListener("click", async function(e) {
            const tablabody = document.getElementById("datos");
            limpiarTabla(tablabody);
            const localesInterior = await ObtenerLocalesInterior();
            localesInterior.forEach(element => {
                const textoFila = `
                <th scope="row">${element.StoreNumber}</th>
                      <td>${element.StoreName}</td>
                      <td>${element.Street_Address}</td>
                      <td>${element.City}</td>
                      <td>${element.Longitude}</td>
                      <td>${element.Latitude}</td> `;
                const fila = tablabody.insertRow(tablabody.rows.length);
                fila.innerHTML = textoFila})})
            ;}
    catch (error) {
        console.log(error)
        
    }
}

async function ObtenerLocales(){
    const resp = await fetch("http://localhost:3001/locales");
    const data = await resp.json();
    return data
};

async function ObtenerLocalesInterior(){
    const resp = await fetch("http://localhost:3001/locales/interior")
    const dat = await resp.json();
    return dat
}

document.addEventListener("DOMContentLoaded", async function (e) {
    await cargarLocales();
    await cargarLocalesInterior()
})