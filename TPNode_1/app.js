const express = require('express');
const app = express();

//bech yparsiii l'body request l'json format
app.use(express.json())
app.get("/test",(req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/health',(req, res) => {
    res.json({status: 200, message:"Server OK" });
    }); 


app.get('/new',(req, res) => { 
    console.log(req.headers) 
    res.redirect("https://www.google.com")}); 

    app.post('/create', function (req, res) {
        console.log(req.body)
        res.send(req.body);
        });
 


app.get('/:prenom/:nom', (req, res) => {
     var prenom = req.params.prenom
         res.send('Salut ' + prenom +  '!');
         });

app.get('/',(req, res) => {
    res.send('hello world');
    });

 

  
    app.get('/', (req, res) => {
        res.send(req.query.prenom);
            });
   

app.listen(9003, () => {
    console.log("Serveur démarré sur le port 9003");
    });