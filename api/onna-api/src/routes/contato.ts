import { Router } from "express"

import { cadastro_Contato } from "../controllers/contato"

const contatoRoutes:Router = Router() 

contatoRoutes.post("/contato/:idTipo_Usuario", cadastro_Contato)

export default contatoRoutes