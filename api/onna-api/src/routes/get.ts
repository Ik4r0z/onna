import { Router } from "express"

import { getUsers } from "../controllers/user"

const getRoutes:Router = Router()

getRoutes.get("/users", getUsers)

export default getRoutes