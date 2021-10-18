import express from 'express';
//const express=require('express');
import morgan from 'morgan';
//const morgan=require('morgan');
import cors from 'cors';

import mongoose from 'mongoose';
//import router from './routes';

//Conexão o banco e dados
mongoose.Promise=global.Promise;
const dbUrl = 'mongodb+srv://lithinho:lithinho@cluster0.pqlzx.mongodb.net/youtube';
mongoose.connect(dbUrl, {useNewUrlParser: true})
.then(mongoose => console.log('conectado ao banco de dados'))
.catch(err => console.log(err));


const app=express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Diretório Público
app.use( express.static('public') );
//app.use('/api',router);
app.set('port',process.env.PORT || 4000);

app.listen(app.get('port'),()=>{
    console.log('rodando na porta ' + app.get('port'));
});