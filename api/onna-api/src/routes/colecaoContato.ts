import { Router } from "express"

import { salvar_Contato_1, salvar_Contato_2, excluir_Contato_1, excluir_Contato_2 } from "../controllers/colecaoContato"

const colecaoContatoRoutes:Router = Router()  

colecaoContatoRoutes.post("/colecaoContato1/:idTipo_Usuario/:idContato", salvar_Contato_1)
colecaoContatoRoutes.post("/colecaoContato2/:idTipo_Usuario/:idContato", salvar_Contato_2)

colecaoContatoRoutes.delete("/colecaoContato1/:idTipo_Usuario/:idContato", excluir_Contato_1)
colecaoContatoRoutes.delete("/colecaoContato2/:idTipo_Usuario/:idContato", excluir_Contato_2)

export default colecaoContatoRoutes