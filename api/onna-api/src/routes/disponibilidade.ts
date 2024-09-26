import { Router } from "express"

import { criar_Disponibilidade, alterar_Disponibilidade, procurar_Profissional_Fisiologico, procurar_Profissional_Psicologico } from "../controllers/disponibilidade"

const disponibilidadeRoutes:Router = Router()  

disponibilidadeRoutes.post("/disponibilidade/:idProfissional", criar_Disponibilidade)

disponibilidadeRoutes.get("/fDisponibilidade", procurar_Profissional_Fisiologico) // checar
disponibilidadeRoutes.get("/pDisponibilidade", procurar_Profissional_Psicologico) // checar

disponibilidadeRoutes.put("/disponibilidade/:idProfissional", alterar_Disponibilidade)

export default disponibilidadeRoutes