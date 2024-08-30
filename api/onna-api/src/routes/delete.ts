import { Router } from "express"

import { deleteTipoUsuario } from "../controllers/tipoUsuario"

const deleteRoutes:Router = Router()

deleteRoutes.delete("/tipoUsuario/:id", deleteTipoUsuario)

export default deleteRoutes