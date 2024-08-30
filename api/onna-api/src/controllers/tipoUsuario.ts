import { Request, Response } from "express"

import { db } from "../db/connection"

import { hashSync } from "bcrypt"

// Create
export const createTipoUsuario = (req:Request, res:Response) => {
    const q = "insert into tblTipo_Usuario(`email`, `senha`, `nome`, `dataNasc`, `avatar`, `tipo_Usuario`) values(?)"

    const values = [
        req.body.email,
        hashSync(req.body.senha, 10),
        req.body.nome,
        req.body.dataNasc,
        req.body.avatar,
        req.body.tipo_Usuario
    ]

    db.query(q, [values], (err) => {
        if(err){
            return res.json(err)
        }

        return res.status(200).json(values)
    })
}

// Read
export const readTipoUsuario = (req:Request, res:Response) => {
    const q = "select * from tblTipo_Usuario"

    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        
        return res.status(200).json(data)
    })
}

// Read by Id
export const readTipoUsuarioById = (req:Request, res:Response) => {
    const q = "select * from tblTipo_Usuario where `idTipo_Usuario` = ?"

    db.query(q, req.params.id, (err, data) => {
        if(err){
            return res.json(err)
        }
        
        return res.status(200).json(data)
    })
}


// Update
export const updateTipoUsuario = (req:Request, res:Response) => {
    const q = "update tblTipo_Usuario set `email` = ?, `senha` = ?, `nome` = ?, `dataNasc` = ?, `avatar` = ? where `idTipo_Usuario` = ?"

    const values = [
        req.body.email,
        hashSync(req.body.senha, 10),
        req.body.nome,
        req.body.dataNasc,
        req.body.avatar
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err){
            return res.json(err)
        }

        return res.status(200).json(values)
    })
}


// Delete
export const deleteTipoUsuario = (req:Request, res:Response) => {
    const q = "delete from tblTipo_Usuario where `idTipo_Usuario` = ?"

    db.query(q, [req.params.id], (err) => {
        if(err){
            return res.json(err)
        }

        return res.status(200).json("Query successful!")
    })
}