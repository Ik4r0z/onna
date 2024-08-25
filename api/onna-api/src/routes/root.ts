import { Router } from "express"

import postRoutes from "./post"
import getRoutes from "./get"
import putRoutes from "./put"
import deleteRoutes from "./delete"

const rootRouter:Router = Router()

rootRouter.use("/post", postRoutes)
rootRouter.use("/get", getRoutes)
rootRouter.use("/put", putRoutes)
rootRouter.use("/delete", deleteRoutes)

export default rootRouter