import { Request, Response } from "express"

import { db } from "../db/connection"

// criar_Denuncia
export const criar_Denuncia = async (req:Request, res:Response) => {
    const q = "call criar_Denuncia(?, ?, ?, ?)"

    const values = [
        req.body.descricao,
        req.params.idTipo_Usuario,
        req.body.idPostagem,
        req.body.idResposta_Postagem
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}

// armazena_idDenuncia 
export const armazena_idDenuncia = async (req:Request, res:Response) => {
    const q = "call armazena_idDenuncia(?)"

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

        const idDenuncia = data[0][0]

        return res.status(200).json(idDenuncia)
    })
}

// relacionar_Categoria_Denuncia
export const relacionar_Categoria_Denuncia = async (req:Request, res:Response) => {
    const q = "call relacionar_Categoria_Denuncia(?, ?)"

    const values = [
        req.params.idDenuncia,
        req.params.idTipo_Denuncia
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}