import { Request, Response } from "express"

import { db } from "../db/connection"

// exibir_Artigo_Menstruacao
export const exibir_Artigo_Menstruacao = async (req:Request, res:Response) => {
    const q = "call exibir_Artigo_Menstruacao()"

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

// exibir_Artigo_Engravidar
export const exibir_Artigo_Engravidar = async (req:Request, res:Response) => {
    const q = "call exibir_Artigo_Engravidar()"

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

// exibir_Artigo_Gestacao
export const exibir_Artigo_Gestacao = async (req:Request, res:Response) => {
    const q = "call exibir_Artigo_Gestacao()"

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

// exibir_Artigo_Maternidade
export const exibir_Artigo_Maternidade = async (req:Request, res:Response) => {
    const q = "call exibir_Artigo_Maternidade()"

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

// exibir_Artigo_Cuidados_Corpo
export const exibir_Artigo_Cuidados_Corpo = async (req:Request, res:Response) => {
    const q = "call exibir_Artigo_Cuidados_Corpo()"

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
