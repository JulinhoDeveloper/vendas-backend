const express = require('express');
const models = require('../models/categoria');

const add = async (req,res,next) =>{
    try {
        const reg = await models.Categoria.create(req.body);
        res.status(200).json(reg);
    } catch (e){
        res.status(500).send({
            message:'Ocurrió un error'
        });
        next(e);
    }
},
const query  =  async (req,res,next) => {
    try {
        const reg=await models.Categoria.findOne({_id:req.query._id});
        if (!reg){
            res.status(404).send({
                message: 'El registro no existe'
            });
        } else{
            res.status(200).json(reg);
        }
    } catch(e){
        res.status(500).send({
            message:'Ocurrió un error'
        });
        next(e);
    }
},
const list =  async (req,res,next) => {
    try {
        let valor=req.query.valor;
        const reg=await models.Categoria.find({});
        res.status(200).json(reg);
    } catch(e){
        res.status(500).send({
            message:'Ocurrió un error'
        });
        next(e);
    }
},
const update = async (req,res,next) => {
    try {
        const reg = await models.Categoria.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre,descripcion:req.body.descripcion});
        res.status(200).json(reg);
    } catch(e){
        res.status(500).send({
            message:'Ocurrió un error'
        });
        next(e);
    }
},
const remove = async (req,res,next) => {
    try {
        const reg = await models.Categoria.findByIdAndDelete({_id:req.body._id});
        res.status(200).json(reg);
    } catch(e){
        res.status(500).send({
            message:'Ocurrió un error'
        });
        next(e);
    }
},
const activate = async (req,res,next) => {
    try {
        const reg = await models.Categoria.findByIdAndUpdate({_id:req.body._id},{estado:1});
        res.status(200).json(reg);
    } catch(e){
        res.status(500).send({
            message:'Ocurrió un error'
        });
        next(e);
    }
}
             
module.exports = {
    add,
    query,
    list,
    update,
    remove,
    activate
}