import { Request, Response } from "express"

import { db } from "../db/connection"

import { hashSync, compareSync } from "bcrypt"

// cadastro_Tipo_Usuario 
export const cadastro_Tipo_Usuario = async (req:Request, res:Response) => {
    const q = "call cadastro_Tipo_Usuario(?, ?, ?, ?, ?, ?)"

    const values = [
        req.body.email,
        hashSync(req.body.senha, 10),
        req.body.nome,
        req.body.dataNasc,
        req.body.avatar,
        req.body.tipo_Usuario
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}

// armazena_idTipo_Usuario
export const armazena_idTipo_Usuario = async (req:Request, res:Response) => {
    const q = "call armazena_idTipo_Usuario(?)"

    const values = [
        req.body.email
    ]

    db.query(q, [values], (err, data) => {
        if(err){
            return res.status(500).json(err)
        }
        
        if (data[0].length === 0) {
            return res.status(404).json(err);
        }

        const idTipo_Usuario = data[0][0]

        return res.status(200).json(idTipo_Usuario)
    })
}

// login_Tipo_Usuario 
export const login_Tipo_Usuario = async (req:Request, res:Response) => {
    const q = "call login_Tipo_Usuario(?)"

    const values = [
        req.body.email
    ]

    db.query(q, [values], (err, data) => {
        if(err){
            return res.status(500).json(err)
        }
        
        if (data[0].length === 0) {
            return res.status(404).json(err);
        }
        
        const tipoUsuario = data[0][0]

        const senhaInserida = req.body.senha
        const senhaArmazenada = tipoUsuario.senha

        const comp = compareSync(senhaInserida, senhaArmazenada)

        if(comp){
            return res.status(200).json(tipoUsuario);
        } 
        else{
            return res.status(401).json(err)
        }
    })
}

// exibir_Perfil
export const exibir_Perfil = async (req:Request, res:Response) => {
    const q = "call exibir_Perfil(?)"

    const values = [
        req.params.idTipo_Usuario
    ]

    db.query(q, [values], (err, data) => {
        if(err){
            return res.status(500).json(err)
        }
        
        if (data[0].length === 0) {
            return res.status(404).json(err);
        }

        const tipoUsuario = data[0][0]

        return res.status(200).json(tipoUsuario)
    })
}

// modificar_Perfil
export const modificar_Perfil = async (req:Request, res:Response) => {
    const q = "call modificar_Perfil(?, ?, ?, ?, ?)"

    const values = [
        req.params.idTipo_Usuario,
        hashSync(req.body.senha, 10),
        req.body.nome,
        req.body.dataNasc,
        req.body.avatar
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}
