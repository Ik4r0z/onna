import { Router } from "express"

import { cadastro_Tipo_Usuario, modificar_Perfil } from "../controllers/tipoUsuario"

const tipoUsuarioRoutes:Router = Router()  

tipoUsuarioRoutes.post("/tipoUsuario", cadastro_Tipo_Usuario) 

tipoUsuarioRoutes.put("/tipoUsuario", modificar_Perfil)

export default tipoUsuarioRoutes