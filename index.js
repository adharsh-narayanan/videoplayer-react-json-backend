 //import json-server library  using 'require' keyword
const jsonServer =require('json-server')

//create server using 'create' function || const serverName =  jsonServer.create()

const mediaPlayerServer=jsonServer.create()

//create path for json file 

const router = jsonServer.router('data.json')

//create middleware to convert json into js
const middleware=jsonServer.defaults()

//connect

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup 'port' for the server // so that the backend will run on different port from front-end or use available port

const port = 4005||process.env.PORT

//run the server

mediaPlayerServer.listen(port,()=>{
    console.log('server running successfully');
})