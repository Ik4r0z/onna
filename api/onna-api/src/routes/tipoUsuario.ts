import { Router } from "express"

import { cadastro_Tipo_Usuario, armazena_idTipo_Usuario, exibir_Perfil, modificar_Perfil } from "../controllers/tipoUsuario"

const tipoUsuarioRoutes:Router = Router()  

tipoUsuarioRoutes.post("/tipoUsuario", cadastro_Tipo_Usuario)

tipoUsuarioRoutes.get("/tipoUsuario", armazena_idTipo_Usuario)
tipoUsuarioRoutes.get("/tipoUsuario/:idTipo_Usuario", exibir_Perfil)

tipoUsuarioRoutes.put("/tipoUsuario/:idTipo_Usuario", modificar_Perfil)

export default tipoUsuarioRoutes