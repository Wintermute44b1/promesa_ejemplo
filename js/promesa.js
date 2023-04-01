const saludar = new Promise ((resolve, reject)=> {
    setTimeout (()=>{
resolve ("Hola mundo soy llamado desde una promesa.")
reject ("Ha fallado la promesa")
    }, 4000) 
})
saludar.then((resultado)=> {
    console.log(resultado)
}).catch((resultado)=>{
    console.log()
})