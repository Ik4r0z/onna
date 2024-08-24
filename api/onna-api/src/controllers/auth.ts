import { Request, Response } from "express"
import { db } from "../db/connection"

export const getUsers = (req:Request, res:Response) => {
    const query = "select * from tbl_user"

    db.query(query, (err, data) => {
        if(err){
            return res.json(err)
        }
        
        return res.status(200).json(data)
    })
}