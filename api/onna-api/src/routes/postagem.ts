import { Router } from "express"

import { criar_Postagem, exibir_Postagem, consulta_Titulo_Postagem, gostei_Postagem, desgostei_Postagem } from "../controllers/postagem"

const postagemRoutes:Router = Router()

postagemRoutes.post("/postagem", criar_Postagem)

postagemRoutes.get("/postagem/:idForum", exibir_Postagem)
postagemRoutes.get("/postagem/:titulo/:idForum", consulta_Titulo_Postagem)

postagemRoutes.put("/postagemG", gostei_Postagem)
postagemRoutes.put("/postagemD", desgostei_Postagem)


export default postagemRoutes