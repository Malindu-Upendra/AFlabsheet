//console.log('Hello world');

//const os = require('os');

//console.log('Architecture ' + os.arch());
//console.log('CPUs ' + os.cpus().length);
//console.log('OS ' + os.platform());

const fs = require('fs');

const filename = __dirname + '/test.txt';

fs.readFile(filename, (err,data)=>{
    if(err){
        console.log(err);
    }

    //console.log(data.toString());
    //console.log(data);
})

const data = fs.readFileSync(filename);
//console.log(data.toString());

const outFilename = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(filename);
const writeStream = fs.createWriteStream(outFilename);

readStream.pipe(writeStream);

readStream.on('data', data => {
    //console.log(data.toString());
})

const http = require('http');

/* http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);*/

http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');

    switch (req.method){
        case 'GET' : res.write('<h1>Hello World</h1>');
                     res.end();
                     break;
        case 'POST' : req.on('data', data => {
            res.write('<h1>Hello' + data + '</h1>');
            res.end();
        });
        break;
    }

}).listen(3000, (err) => {
    console.log('Server is listening to port 3001')
});
