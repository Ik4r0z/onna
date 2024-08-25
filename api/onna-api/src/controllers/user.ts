import { Request, Response } from "express"

import { db } from "../db/connection"

import { hashSync } from "bcrypt"

// Create
export const postUsers = (req:Request, res:Response) => {
    const q = "insert into tbl_user(`nome`, `data_Nasc`, `email`, `senha`) values(?)"

    const values = [
        req.body.nome,
        req.body.data_Nasc,
        req.body.email,
        hashSync(req.body.senha, 10)
    ]

    db.query(q, [values], (err) => {
        if(err){
            return res.json(err)
        }

        return res.status(200).json("User created!")
    })
}

// Read
export const getUsers = (req:Request, res:Response) => {
    const q = "select * from tbl_user"

    db.query(q, (err, data) => {
        if(err){
            return res.json(err)
        }
        
        return res.status(200).json(data)
    })
}

// Update
export const putUsers = (req:Request, res:Response) => {
    const q = "update tbl_user set `nome` = ?, `data_Nasc` = ?, `email` = ?, `senha` = ? where `id` = ?"

    const values = [
        req.body.nome,
        req.body.data_Nasc,
        req.body.email,
        hashSync(req.body.senha, 10)
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err){
            return res.json(err)
        }

        return res.status(200).json("User updated!")
    })
}


// Delete
export const deleteUsers = (req:Request, res:Response) => {
    const q = "delete from tbl_user where `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if(err){
            return res.json(err)
        }

        return res.status(200).json("User deleted!")
    })
}