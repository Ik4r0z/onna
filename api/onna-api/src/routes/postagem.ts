import { Router } from "express"

import { criar_Postagem, exibir_Postagem, consulta_Titulo_Postagem, gostei_Postagem, desgostei_Postagem } from "../controllers/postagem"

const postagemRoutes:Router = Router()

postagemRoutes.post("/postagem/:idForum/:idTipo_Usuario", criar_Postagem)

postagemRoutes.get("/postagem/:idForum", exibir_Postagem)
postagemRoutes.get("/tituloPostagem/:idForum", consulta_Titulo_Postagem)

postagemRoutes.put("/gPostagem/:idPostagem", gostei_Postagem)
postagemRoutes.put("/dPostagem/:idPostagem", desgostei_Postagem)


export default postagemRoutes