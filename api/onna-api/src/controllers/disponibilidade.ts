import { Request, Response } from "express"

import { db } from "../db/connection"

// criar_Disponibilidade 
export const criar_Disponibilidade = async (req:Request, res:Response) => {
    const q = "call criar_Disponibilidade(?, ?, ?, ?)"

    const values = [
        req.params.idProfissional,
        req.body.data_Disponibilidade,
        req.body.hora_Inicial,
        req.body.hora_Final
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}

// alterar_Disponibilidade
export const alterar_Disponibilidade = async (req:Request, res:Response) => {
    const q = "call alterar_Disponibilidade(?, ?, ?, ?)"

    const values = [
        req.params.idProfissional,
        req.body.data_Disponibilidade,
        req.body.hora_Inicial,
        req.body.hora_Final
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}

// procurar_Profissional_Fisiologico
export const procurar_Profissional_Fisiologico = async (req:Request, res:Response) => {
    const q = "call procurar_Profissional_Fisiologico()"

    db.query(q, (err, data) => {
        if(err){
            return res.status(500).json(err)
        }
        
        if (data[0].length === 0) {
            return res.status(404).json(err);
        }

        return res.status(200).json(data[0])
    })
}

// procurar_Profissional_Fisiologico
export const procurar_Profissional_Psicologico = async (req:Request, res:Response) => {
    const q = "call procurar_Profissional_Psicologico()"

    db.query(q, (err, data) => {
        if(err){
            return res.status(500).json(err)
        }
        
        if (data[0].length === 0) {
            return res.status(404).json(err);
        }

        return res.status(200).json(data[0])
    })
}