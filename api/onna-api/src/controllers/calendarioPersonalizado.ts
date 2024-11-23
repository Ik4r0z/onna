import { Request, Response } from "express"

import { db } from "../db/connection"

// cadastrar_Calendario 
export const cadastrar_Calendario = async (req:Request, res:Response) => {
    const q = "call cadastrar_Calendario(?, ?, ?)"

    const values = [
        req.body.data_Inicial,
        req.body.data_Final,
        req.body.idUsuario
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}

// exibir_Calendario
export const exibir_Calendario = async (req:Request, res:Response) => {
    const q = "call exibir_Calendario(?)"

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

// alterar_Calendario
export const alterar_Calendario = async (req:Request, res:Response) => {
    const q = "call alterar_Calendario(?, ?, ?)"

    const values = [
        req.body.data_Inicial,
        req.body.data_Final,
        req.body.idUsuario
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}

// excluir_Calendario
export const excluir_Calendario = async (req:Request, res:Response) => {
    const q = "call excluir_Calendario(?)"

    const values = [
        req.body.idUsuario
    ]

    db.query(q, [values], (err, data) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(data)
    })
}
