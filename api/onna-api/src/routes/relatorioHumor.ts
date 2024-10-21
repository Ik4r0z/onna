import { Router } from "express"

import { criar_Relatorio_Humor, exibir_Relatorios} from "../controllers/relatorioHumor"

const relatorioHumorRoutes:Router = Router()  

relatorioHumorRoutes.post("/relatorioHumor", criar_Relatorio_Humor)

relatorioHumorRoutes.get("/relatorioHumor/:idUsuario", exibir_Relatorios)

export default relatorioHumorRoutes