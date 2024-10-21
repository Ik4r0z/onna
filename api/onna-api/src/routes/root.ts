import { Router } from "express"

import adminRoutes from "./admin"
import artigoRoutes from "./artigo"
import calendarioPersonalizadoRoutes from "./calendarioPersonalizado"
import colecaoContatoRoutes from "./colecaoContato"
import contatoRoutes from "./contato"
import conversaPrivadaRoutes from "./conversaPrivada"
import denunciaRoutes from "./denuncia"
import disponibilidadeRoutes from "./disponibilidade"
import loginRoutes from "./login"
import notificacaoRoutes from "./notificacao"
import perfisRoutes from "./perfis"
import postagemRoutes from "./postagem"
import relatorioHumorRoutes from "./relatorioHumor"
import respostaPostagemRoutes from "./respostaPostagem"
import tipoUsuarioRoutes from "./tipoUsuario"

const rootRouter:Router = Router()

rootRouter.use(adminRoutes)
rootRouter.use(artigoRoutes)
rootRouter.use(calendarioPersonalizadoRoutes)
rootRouter.use(colecaoContatoRoutes)
rootRouter.use(conversaPrivadaRoutes)
rootRouter.use(contatoRoutes)
rootRouter.use(denunciaRoutes)
rootRouter.use(disponibilidadeRoutes)
rootRouter.use(loginRoutes)
rootRouter.use(notificacaoRoutes)
rootRouter.use(perfisRoutes)
rootRouter.use(postagemRoutes)
rootRouter.use(relatorioHumorRoutes)
rootRouter.use(respostaPostagemRoutes)
rootRouter.use(tipoUsuarioRoutes)

export default rootRouter