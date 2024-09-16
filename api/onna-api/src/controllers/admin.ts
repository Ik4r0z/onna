import { Request, Response } from "express"

import { db } from "../db/connection"

import { hashSync } from "bcrypt"

// Create
export const createAdmin = (req:Request, res:Response) => {
    const q = "call cadastro_Admin(?, ?)"

    const values = [
        req.body.username,
        hashSync(req.body.senha, 10)
    ]

    db.query(q, [...values], (err) => {
        if(err){
            return res.json(err)
        }

        return res.status(200).json(values)
    })
}

// Read
export const readAdmin = async (req:Request, res:Response) => {
    const q = "call login_Admin(?)"

    const values = [
        req.body.username
    ]

    db.query(q, [values], (err, data) => {
        if(err){
            return res.json(err)
        }
        
        return res.status(200).json(data)
    })
}