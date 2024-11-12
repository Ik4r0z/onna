import { Router } from "express"

import { criar_Postagem, exibir_Postagem_Especifica, exibir_Postagem_Popular, exibir_Postagem_Forum, consulta_Titulo_Postagem, exibir_Postagem_Geral, exibir_Postagem_Propria, contagem_Postagem, alterar_Postagem, excluir_Postagem, gostei_Postagem, desgostei_Postagem } from "../controllers/postagem"

const postagemRoutes:Router = Router()

postagemRoutes.post("/postagem", criar_Postagem)

postagemRoutes.get("/postagem/:idPostagem", exibir_Postagem_Especifica)
postagemRoutes.get("/postagem", exibir_Postagem_Popular)
postagemRoutes.get("/postagem/:idForum", exibir_Postagem_Forum)
postagemRoutes.get("/postagem/:titulo/:idForum", consulta_Titulo_Postagem)
postagemRoutes.get("/postagem", exibir_Postagem_Geral)
postagemRoutes.get("/postagem/:idTipo_Usuario", exibir_Postagem_Propria)
postagemRoutes.get("/postagem/:idTipo_Usuario", contagem_Postagem)

postagemRoutes.put("/postagem", alterar_Postagem)
postagemRoutes.put("/postagem", excluir_Postagem)
postagemRoutes.put("/postagemG", gostei_Postagem)
postagemRoutes.put("/postagemD", desgostei_Postagem)

export default postagemRoutes
