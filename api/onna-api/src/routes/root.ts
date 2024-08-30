import { Router } from "express"

import createRoutes from "./create"
import readRoutes from "./read"
import updateRoutes from "./update"
import deleteRoutes from "./delete"

const rootRouter:Router = Router()

rootRouter.use("/create", createRoutes)
rootRouter.use("/read", readRoutes)
rootRouter.use("/update", updateRoutes)
rootRouter.use("/delete", deleteRoutes)

export default rootRouter