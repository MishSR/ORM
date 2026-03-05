import { Router } from "express";

import authorRoutes from "./authorRoutes.js";
import bookRoutes from "./bookRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import userRoutes from "./userRoutes.js";   
import loanRoutes from "./loanRoutes.js";

const router = Router();    

router.use("/authors", authorRoutes);
router.use("/books", bookRoutes);
router.use("/reviews", reviewRoutes);
router.use("/users", userRoutes);
router.use("/loans", loanRoutes);

export default router;  

