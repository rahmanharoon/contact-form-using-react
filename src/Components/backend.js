var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer(function (req,res) {

    if(req.url==='/') {
        fs.readFile('Contact.js', function(err,cal){
            res.writeHead(200,{"Content-type":"text/html"})
            res.write(cal)
            res.end()
        })
    }else if(req.url==='/submit'){
        fs.readFile('Contact.js',function (err,data){
            res.writeHead(200,{"Content-type":"text/html"})
            res.write('Submited')
             res.end()
        })
    }else {
            res.writeHead(404,{'Content-type':'text/html'})
            res.write('error')
            res.end()
        }
}).listen(4000, () => console.log("Server running"))