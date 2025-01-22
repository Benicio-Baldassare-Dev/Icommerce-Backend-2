import { Router } from "express";
import { verifyToken } from "../utils/jwt.js";

const router = Router();

router.put('/current', async (req, res) => {
    try {

        const { token } = req.body;
        
        res.status(201).json({ message: "El token es valido", user: decodedToken });   

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

export default router;