import { Router } from "express"

import tipoUsuarioRoutes from "./tipoUsuario"
import adminRoutes from "./admin"

const rootRouter:Router = Router()

rootRouter.use(tipoUsuarioRoutes)
rootRouter.use(adminRoutes)

export default rootRouter