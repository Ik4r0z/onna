import { Router } from "express"

import { criar_Disponibilidade, alterar_Disponibilidade, procurar_Profissional_Fisiologico, procurar_Profissional_Psicologico } from "../controllers/disponibilidade"

const disponibilidadeRoutes:Router = Router()  

disponibilidadeRoutes.post("/disponibilidade", criar_Disponibilidade)

disponibilidadeRoutes.get("/disponibilidadeF", procurar_Profissional_Fisiologico)
disponibilidadeRoutes.get("/disponibilidadeP", procurar_Profissional_Psicologico)

disponibilidadeRoutes.put("/disponibilidade", alterar_Disponibilidade)

export default disponibilidadeRoutes