import { Router } from "express"

import { updateTipoUsuario } from "../controllers/tipoUsuario"

const updateRoutes:Router = Router()

updateRoutes.put("/tipoUsuario/:id", updateTipoUsuario)

export default updateRoutes