import { Router } from "express";
import { verifyToken } from "../utils/jwt.js";
import userDao from "../dao/user.dao.js";

const router = Router();

router.get('/current', async (req, res) => {
    try {

            const token = req.cookies.token;
            const validToken = verifyToken(token);
            if(!validToken) return res.send("Not Token");

            const user = await userDao.getOne(validToken.email);

           res.json({ status: 'ok', user });
 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

export default router;