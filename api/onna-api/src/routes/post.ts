import { Router } from "express"

import { postUsers } from "../controllers/user"

const postRoutes:Router = Router()

postRoutes.post("/users", postUsers)

export default postRoutes