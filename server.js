const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
app.use( express.static(path.join(__dirname, 'public')));

// CONFIG A CONEXAO COM O BANCO DE DADOS
const connection = mysql.createConnection(
    {
        host:'127.0.0.1',
        user: 'root',
        password: 'aluno',
        database: 'aula',
        port: 3302
    })

// CONECTAR COM O BANCO DE DADOS
connection.connect( err => { 
    if(err){
        console.error('Erro ao conectar ao banco', err);
        return;
    }
    console.log('Conectado do banco');
 });

 // CONFIG DO BODY PARSER
 app.use( bodyParser.urlencoded({extended: true}) );

 // SERVIR O FORMULARIO HTML
 app.get( '/', (req, res)=>{ 
    res.sendFile( path.join(__dirname, 'index.html'));
 });

 // PROCESSAR DADOS DO FORM
 app.post('/inserirCliente', (req, res)=>{
    const{ nome, email, telefone, endereco } = req.body;
    const sql = 'CALL inserirCliente(?,?,?,?)';
    connection.query(sql, [nome, email, telefone, endereco], (err, results) => {
        if(err){
            console.error("Erro ao inserir cliente", err);
            res.end("Erro ao inserir cliente");
            return;
        }
        res.redirect("/?mensagem=sucesso");
    });
});

// INICIAR O SERVIDOR
app.listen(port, () => {
    console.log(`Servidor iniciando na em http://localhost:${port}`)
});

