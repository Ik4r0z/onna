import { Router } from "express"
import { getUsers } from "../controllers/auth"

const authRoutes:Router = Router()

authRoutes.get("/users", getUsers)

export default authRoutes