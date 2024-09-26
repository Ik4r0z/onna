import { Request, Response } from "express"

import { db } from "../db/connection"

// criar_Relatorio_Humor 
export const criar_Relatorio_Humor = async (req:Request, res:Response) => {
    const q = "call criar_Relatorio_Humor(?, ?)"

    const values = [
        req.params.idUsuario,
        req.body.media_Humor
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}

// exibir_Relatorios
export const exibir_Relatorios = async (req:Request, res:Response) => {
    const q = "call exibir_Relatorios(?)"

    const values = [
        req.params.idUsuario
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