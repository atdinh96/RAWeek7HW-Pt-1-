// import http

const http = require("http")
const { createDeflateRaw } = require("zlib")

//create server with http 

const server = http.createServer((req,res)=> {
    const url = req.url
    let tabeData = "<table border=1'><tr><th>name</th><th>height</th><th>birth_year</th><th>gender</th>"
    if(url == '/'){
        res.write("Welcome to the Homepage!")
        res.end()
    }
    
    if(url === '/list') {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(data => {
                createData(data)
                res.write('tableData')
                res.end()
            })
            
    }

    if(!(url == '/list' || url == '/')){
        res.write("Error Page Not Found")
        res.end()
    }

    function createData(data){
        data.forEach(element => {
        tableData+='<tr><td>${element.name}</td><tr><td>${element.height}</td><tr><td>${element.birth_year}</td><tr><td>${element.gender}</td></tr>'
    });
    
    tableData+= '</table>'

}).listen(8090,console.log('Server listening on port 8090'))
