import { Router } from "express"

import { criar_Relatorio_Humor, criar_Relatorio_Remedio, criar_Relatorio_Atividade, exibir_Relatorio_Humor, exibir_Relatorio_Remedio, exibir_Relatorio_Atividade} from "../controllers/relatorio"

const relatorioRoutes:Router = Router()  

relatorioRoutes.post("/relatorioHumor", criar_Relatorio_Humor)
relatorioRoutes.post("/relatorioHumor", criar_Relatorio_Remedio)
relatorioRoutes.post("/relatorioHumor", criar_Relatorio_Atividade)

relatorioRoutes.get("/relatorioHumor/:idUsuario/:data_Relatorio", exibir_Relatorio_Humor)
relatorioRoutes.get("/relatorioHumor/:idUsuario/:data_Relatorio", exibir_Relatorio_Remedio)
relatorioRoutes.get("/relatorioHumor/:idUsuario/:data_Relatorio", exibir_Relatorio_Atividade)

export default relatorioRoutes
