import { Router } from "express"

import { criar_Resposta_Postagem, exibir_Resposta_Postagem, gostei_Resposta, desgostei_Resposta } from "../controllers/respostaPostagem"

const respostaPostagemRoutes:Router = Router()

respostaPostagemRoutes.post("/respostaPostagem/:idPostagem/:idTipo_Usuario", criar_Resposta_Postagem)

respostaPostagemRoutes.get("/respostaPostagem/:idPostagem", exibir_Resposta_Postagem)

respostaPostagemRoutes.put("/gRespostaPostagem/:idResposta_Postagem", gostei_Resposta)
respostaPostagemRoutes.put("/dRespostaPostagem/:idResposta_Postagem", desgostei_Resposta)

export default respostaPostagemRoutes