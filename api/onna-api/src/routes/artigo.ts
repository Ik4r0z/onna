import { Router } from "express"

import { exibir_Artigo_Menstruacao, exibir_Artigo_Engravidar, exibir_Artigo_Gestacao, exibir_Artigo_Maternidade, exibir_Artigo_Cuidados_Corpo } from "../controllers/artigo"

const artigoRoutes:Router = Router()

artigoRoutes.get("/artigo/menstruacao", exibir_Artigo_Menstruacao)
artigoRoutes.get("/artigo/engravidar", exibir_Artigo_Engravidar)
artigoRoutes.get("/artigo/gestacao", exibir_Artigo_Gestacao)
artigoRoutes.get("/artigo/maternidade", exibir_Artigo_Maternidade)
artigoRoutes.get("/artigo/cuidadosCorpo", exibir_Artigo_Cuidados_Corpo)

export default artigoRoutes