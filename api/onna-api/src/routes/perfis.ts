import { Router } from "express"

import { cadastro_Perfil_Pessoal, cadastro_Perfil_Profissional, exibir_Dados_Profissional, modificar_Area_Formacao } from "../controllers/perfis"

const perfisRoutes:Router = Router() 

perfisRoutes.post("/perfilPessoal/:idTipo_Usuario", cadastro_Perfil_Pessoal)
perfisRoutes.post("/perfilProfissional/:idTipo_Usuario", cadastro_Perfil_Profissional)

perfisRoutes.get("/perfilProfissional/:idTipo_Usuario", exibir_Dados_Profissional)

perfisRoutes.put("/perfilProfissional/:idTipo_Usuario", modificar_Area_Formacao)

export default perfisRoutes