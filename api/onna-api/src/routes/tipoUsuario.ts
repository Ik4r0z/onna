import { Router } from "express"

import { createTipoUsuario, readTipoUsuario, readTipoUsuarioById, updateTipoUsuario, deleteTipoUsuario } from "../controllers/tipoUsuario"

const tipoUsuarioRoutes:Router = Router()

tipoUsuarioRoutes.post("/tipoUsuario", createTipoUsuario)
tipoUsuarioRoutes.get("/tipoUsuario", readTipoUsuario)
tipoUsuarioRoutes.get("/tipoUsuario/:id", readTipoUsuarioById)
tipoUsuarioRoutes.put("/tipoUsuario/:id", updateTipoUsuario)
tipoUsuarioRoutes.delete("/tipoUsuario/:id", deleteTipoUsuario)

export default tipoUsuarioRoutes