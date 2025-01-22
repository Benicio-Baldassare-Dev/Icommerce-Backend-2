import { Router } from "express";
import accountDao from "../dao/account.dao.js";

const router = Router();

router.put("/deposit", async (req, res) => {
    try {

        const {amount, alias, number} = req.body;
        const queryAccount = alias ? { alias } : { number };
        const findAccount = await accountDao.getOne({ queryAccount });
        console.log(findAccount)
        if(!findAccount) res.status(404).json({ error: "Cuenta no encontrada" });
         
        const updateAccount = await accountDao.update(findAccount._id , { wallet: amount });
        
        res.status(200).json({ status: 'succes', payload: updateAccount });

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error"});
    }
})

export default router;