import { Router } from "express"

import { cadastrar_Calendario,  exibir_Calendario, alterar_Calendario, excluir_Calendario } from "../controllers/calendarioPersonalizado"

const calendarioPersonalizadoRoutes:Router = Router()  

calendarioPersonalizadoRoutes.post("/calendarioPersonalizado", cadastrar_Calendario)

calendarioPersonalizadoRoutes.get("/calendarioPersonalizado/:idUsuario", exibir_Calendario)

calendarioPersonalizadoRoutes.put("/calendarioPersonalizado", alterar_Calendario)

calendarioPersonalizadoRoutes.delete("/calendarioPersonalizado", excluir_Calendario)

export default calendarioPersonalizadoRoutes
