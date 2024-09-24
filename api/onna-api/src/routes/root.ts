import { Router } from "express"

import adminRoutes from "./admin"
import artigoRoutes from "./artigo"
import contatoRoutes from "./contato"
import denunciaRoutes from "./denuncia"
import forumRoutes from "./forum"
import loginRoutes from "./login"
import perfisRoutes from "./perfis"
import postagemRoutes from "./postagem"
import respostaPostagemRoutes from "./respostaPostagem"
import tipoUsuarioRoutes from "./tipoUsuario"

const rootRouter:Router = Router()

rootRouter.use(adminRoutes)
rootRouter.use(artigoRoutes)
rootRouter.use(contatoRoutes)
rootRouter.use(denunciaRoutes)
rootRouter.use(forumRoutes)
rootRouter.use(loginRoutes)
rootRouter.use(perfisRoutes)
rootRouter.use(postagemRoutes)
rootRouter.use(respostaPostagemRoutes)
rootRouter.use(tipoUsuarioRoutes)

export default rootRouter