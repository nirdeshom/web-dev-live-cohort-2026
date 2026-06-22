import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";

const registerUser = async (req, res)=>{
    // get data
    // validate
    // check if user already exists
    // create a user in database
    // create a varification token
    // save token in database
    // send token as email to user
    // send success status touser

    // get data in body
    const {name, email, password} = req.body
    console.log(req.body);

    // validate data
    if(!name || !email || !password){
        return res.status(400).json({
            message: "All fields are required"
        });
    };

    // check password length
    if (password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters"
        });
    };

    try {
        // check if user already exists db
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }

        // create a user in database
        const user = await User.create({
            name,
            email,
            password
        })
        console.log(user);

        if(!user){
            return status(400).json({
                message: "User not register"
            })
        }

        // create a varification token
        const token = crypto.randomBytes(32).toString("hex")
        console.log(token);

        // save token in database
        user.verificationToken = token
        await user.save();

        // send token as email to user
        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
        auth: {
            user: process.env.MAILTRAP_USERNAME,
            pass: process.env.MAILTRAP_PASSWORD,
        },
    });

    const mailOption = {
        from: process.env.MAILTRAP_SENDERMAIL, // sender address
        to: user.email, // list of recipients
        subject: "Verify your email", // subject line
        text: `Please click on the following link: ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain text body
        html: "<b>Hello world?</b>", // HTML body
    }

    await transporter.sendMail(mailOption)

    res.status(201).json({
        message: "User register successfull"
    })

    } catch (error) {
        res.status(201).json({
        message: "User not register",
        success: true,
        error
    })
    }
};

export {registerUser}