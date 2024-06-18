 'use strict'

 window.addEventListener('load', async ()=> {
    let x=11
    const promesa = new Promise((resolve,reject) => {

        if (x==10) {
            return resolve('x==10') // LO QUE DEVUELVA DENTRO DEL RESOLVE ES LO QUE VA A PASAR POR PARAMETRO A THEN
        }
        else 
            return reject({}) // LO MISMO QUE ARRIBA PERO A CATCH
})
//.then((result) => console.log('promesa ok', result)).catch((error)=> console.error('promesa no ok', error))


async function inicio(){
    try {
        const result = await promesa; // permite que primero se ejecute la promesa para despues ejecutar lo demas 
        console.log(result)
    }
    catch(error){
        console.error(error)
    
    }
    
}
 })



