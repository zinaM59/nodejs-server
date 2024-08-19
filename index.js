const express = require ( 'express' ) 
const app = express () 
const port = 3000

 app. get ( '/', ( req, res ) => { 
  res. send ( 'Hello World!' ) 
}) 

app. Listen (port, () => { 
  console . log ( `Пример приложения, прослушивающего порт ${port} ` ) 
})
