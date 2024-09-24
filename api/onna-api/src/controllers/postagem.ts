import { Request, Response } from "express"

import { db } from "../db/connection"

// criar_Postagem
export const criar_Postagem = async (req:Request, res:Response) => {
    const q = "call criar_Postagem(?, ?, ?, ?, ?)"

    const values = [
        req.body.titulo,
        req.body.subtitulo,
        req.body.imagem,
        req.params.idTipo_Usuario,
        req.params.idForum
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}

// exibir_Postagem
export const exibir_Postagem = async (req:Request, res:Response) => {
    const q = "call exibir_Postagem(?)"

    const values = [
        req.params.idForum
    ]

    db.query(q, [values], (err, data) => {
        if(err){
            return res.status(500).json(err)
        }
        
        if (data[0].length === 0) {
            return res.status(404).json(err);
        }

        return res.status(200).json(data[0])
    })
}

// consulta_Titulo_Postagem
export const consulta_Titulo_Postagem = async (req:Request, res:Response) => {
    const q = "call consulta_Titulo_Postagem(?, ?)"

    const values = [
        req.body.titulo,
        req.params.idForum
    ]

    db.query(q, [...values], (err, data) => {
        if(err){
            return res.status(500).json(err)
        }
        
        if (data[0].length === 0) {
            return res.status(404).json(err);
        }

        return res.status(200).json(data[0])
    })
}

// gostei_Postagem
export const gostei_Postagem = async (req:Request, res:Response) => {
    const q = "call gostei_Postagem(?)"

    const values = [
        req.params.idPostagem
    ]

    db.query(q, [values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}

// desgostei_Postagem
export const desgostei_Postagem = async (req:Request, res:Response) => {
    const q = "call desgostei_Postagem(?)"

    const values = [
        req.params.idPostagem
    ]

    db.query(q, [values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}