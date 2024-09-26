import { Router } from "express"

import { cadastro_Contato, exibir_Lista_Contatos } from "../controllers/contato"

const contatoRoutes:Router = Router() 

contatoRoutes.post("/contato/:idTipo_Usuario", cadastro_Contato)

contatoRoutes.get("/colecaoContato/:idTipo_Usuario", exibir_Lista_Contatos)

export default contatoRoutes