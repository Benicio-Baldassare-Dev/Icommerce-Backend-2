import { Router } from "express";
import userRoutes from "./user.routes.js"
import accountRoutes from "./product.routes.js"
import currentRoutes from './current.routes.js'

const router = Router();

router.use("/sessions", userRoutes);
router.use("/product", accountRoutes);
// router.use("/sessions", currentRoutes);

export default router;