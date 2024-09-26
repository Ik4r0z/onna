import { Router } from "express"

import { cadastrar_Calendario, alterar_Calendario, definir_Intervalo_Calendario } from "../controllers/calendarioPersonalizado"

const calendarioPersonalizadoRoutes:Router = Router()  

calendarioPersonalizadoRoutes.post("/calendarioPersonalizado/:idUsuario", cadastrar_Calendario)

calendarioPersonalizadoRoutes.get("/calendarioPersonalizado", definir_Intervalo_Calendario)

calendarioPersonalizadoRoutes.put("/calendarioPersonalizado/:idUsuario", alterar_Calendario)

export default calendarioPersonalizadoRoutes