import { Router } from "express"

import { criar_Notificacao, exibir_Lista_Notificacoes, excluir_Notificacao, alertar_Notificacao } from "../controllers/notificacao"

const notificacaoRoutes:Router = Router()  

notificacaoRoutes.post("/notificacao/:idUsuario", criar_Notificacao)

notificacaoRoutes.get("/eNotificacao/:idUsuario", exibir_Lista_Notificacoes)
notificacaoRoutes.get("/aNotificacao/:idUsuario", alertar_Notificacao) // checar

notificacaoRoutes.delete("/notificacao/:idNotificacao", excluir_Notificacao)

export default notificacaoRoutes