import { Router } from "express"

import { createTipoUsuario } from "../controllers/tipoUsuario"

const createRoutes:Router = Router()

createRoutes.post("/tipoUsuario", createTipoUsuario)

export default createRoutes