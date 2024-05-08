import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import validator from "validator";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export const register = async (req, res)=> {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json("User already exists...");

        user = new User({ username, email, password, emailToken: crypto.randomBytes(64).toString("hex"), });

        if (!username || !email || !password)
            return res.status(400).json("Όλα τα πεδία είναι υποχρεωτικά...");

        if (!validator.isEmail(email))
            return res.status(400).json("Το email πρέπει να είναι έγκυρο email...");
              

        // if (!validator.isStrongPassword(password))
        //     return res.status(400).json("Ο κωδικός πρόσβασης πρέπει να περιέχει τουλάχιστον ένα νούμερο, ένα κεφάλαιο γράμμα και έναν ιδικό χαρακτήρα (π.χ. $%&..)");

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const createToken = (_id) => {
            const jwtSecretKey = process.env.JWT;
            return jwt.sign({ _id }, jwtSecretKey, { expiresIn: "3d" });
        };

        const token = createToken(user._id);

        res.status(200).json({ 
            _id: user._id, 
            username, 
            email, 
            token,
            message: "O logariasmos dimiourgithike me epitixia!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

export const login = async (req, res, next)=> {
    try{
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "Ο χρήστης δεν βρέθηκε!"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password, 
            user.password
        );

        if(!isPasswordCorrect) 
            return next(createError(400, "Λάθος κωδικός ή όνομα χρήστη!"));

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin }, 
            process.env.JWT
        );

        const { password, isAdmin, ...otherDetails } = user._doc;
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({details: {...otherDetails}, isAdmin });

    }catch(err) {
        next(err);
    }
};

export const logout = async (req, res, next) => {
    try {
        res.clearCookie("access_token");

        res.status(200).send("Logout successful.");
    } catch (err) {
        next(err);
    }
};
