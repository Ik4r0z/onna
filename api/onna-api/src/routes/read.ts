import { Router } from "express"

import { readTipoUsuario, readTipoUsuarioById } from "../controllers/tipoUsuario"

const readRoutes:Router = Router()

readRoutes.get("/tipoUsuario", readTipoUsuario)
readRoutes.get("/tipoUsuario/:id", readTipoUsuarioById)

export default readRoutes