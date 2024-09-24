import { Router } from "express"

import { login_Admin } from "../controllers/admin"
import { login_Tipo_Usuario } from "../controllers/tipoUsuario"

const loginRoutes:Router = Router()

loginRoutes.get("/auth/admin", login_Admin)
loginRoutes.get("/auth/tipoUsuario", login_Tipo_Usuario)

export default loginRoutes 