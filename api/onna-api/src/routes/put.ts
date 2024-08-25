import { Router } from "express"

import { putUsers } from "../controllers/user"

const putRoutes:Router = Router()

putRoutes.put("/users/:id", putUsers)

export default putRoutes