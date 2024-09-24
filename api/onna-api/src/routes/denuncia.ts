import { Router } from "express"

import { criar_Denuncia, armazena_idDenuncia, relacionar_Categoria_Denuncia } from "../controllers/denuncia"

const denunciaRoutes:Router = Router()

denunciaRoutes.post("/denuncia/:idTipo_Usuario", criar_Denuncia)
denunciaRoutes.post("/denuncia/:idDenuncia/:idTipo_Denuncia", relacionar_Categoria_Denuncia)

denunciaRoutes.get("/denuncia/:idTipo_Usuario", armazena_idDenuncia)

export default denunciaRoutes