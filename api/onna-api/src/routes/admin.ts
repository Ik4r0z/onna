import { Router } from "express"

import { createAdmin, readAdmin } from "../controllers/admin"

const adminRoutes:Router = Router()

adminRoutes.post("/admin", createAdmin)
adminRoutes.get("/admin", readAdmin)

export default adminRoutes