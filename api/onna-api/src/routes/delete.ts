import { Router } from "express"

import { deleteUsers } from "../controllers/user"

const deleteRoutes:Router = Router()

deleteRoutes.delete("/users/:id", deleteUsers)

export default deleteRoutes