import { Router } from "express";
import userDao from "../dao/user.dao.js";
import { createHash, isValidPassword } from "../utils/hashPassword.js";
import accountDao from "../dao/account.dao.js";
import { createToken, verifyToken } from "../utils/jwt.js";
import { cartDao } from "../dao/cart.dao.js";
import { passportCall } from "../middlewares/passportCall.middelware.js";
import { authorization } from "../middlewares/authorization.middleware.js";
import passport from "passport";

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const {first_name, lastName, email, age, password, role} = req.body;
        
        const user = await userDao.getOne({email});
        
        if(user) return res.status(401).json({error: '¡Este mail ya esa en uso!'});

        // creamos la cuenta del usuario
            const newAccount = {
                number: Math.floor(Math.random() * 1000000000),
                alias: `${first_name.toLowerCase()}${lastName.toLowerCase()}.${Math.floor(Math.random() * 1000)}`,
                wallet: 0,
            }

            const account = await accountDao.create(newAccount);

            const newCart = await cartDao.create();


            const newUser = {
                first_name,
                lastName,
                email,
                age,
                password: createHash(password),
                account: account._id,
                role,
                cart: newCart._id
            }

            const createUser = await userDao.create(newUser);

            await accountDao.update(account._id, { userId: createUser._id  })

        res.status(201).json({status: 'ok', msg: newUser});

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error"});
    }
})

router.post("/login", async (req, res) => {
    try {

        const {email, password} = req.body;
        const user = await userDao.getOne({ email });
        if(!user || !isValidPassword(password, user)) return res.status(401).json({ error: 'Email o contraseña no validos' });

        const token = createToken(user);
        res.cookie("token", token, { httpOnly: true });

        res.status(200).json({ status: 'ok', payload: user });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal Server Error"});
    }
})


router.get("/current", passportCall("jwt"), authorization("user"), async (req, res) => {
    try {
        res.status(200).json({ status: 'success', user: req.user })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
  });

export default router;