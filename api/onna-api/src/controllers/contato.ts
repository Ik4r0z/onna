import { Request, Response } from "express"

import { db } from "../db/connection"

// cadastro_Contato
export const cadastro_Contato = async (req:Request, res:Response) => {
    const q = "call cadastro_Contato(?)"

    const values = [
        req.params.idTipo_Usuario
    ]

    db.query(q, [values], (err) => {
        if(err){
            return res.status(500).json(err)
        }

        return res.status(200).json(values)
    })
}