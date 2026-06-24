import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user register
const registerUser = async (req, res) => {
  // get data
  // validate
  // check if user already exists
  // create a user in database
  // create a varification token
  // save token in database
  // send token as email to user
  // send success status to user

  // get data in body
  const { name, email, password } = req.body;
  console.log(req.body);

  // validate data
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  // check password length
  if (password.length < 8) {
    return res.status(400).json({
      message: "Password must be at least 8 characters",
    });
  }

  try {
    // check if user already exists db
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // create a user in database
    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);

    if (!user) {
      return status(400).json({
        message: "User not register",
      });
    }

    // create a varification token
    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);

    // save token in database
    user.verificationToken = token;
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
    };

    await transporter.sendMail(mailOption);

    // send success status to user
    res.status(201).json({
      message: "User register successfull",
    });
  } catch (error) {
    res.status(201).json({
      message: "User not register",
      success: true,
      error,
    });
  }
};

// User token verification
const verifyUser = async (req, res) => {
  // get token from url
  // validate
  // find user based on token
  // if not
  // set isVerify field to true
  // remove verification token
  // save response

  // get token from url
  const { token } = req.params;
  console.log(token);

  // validate
  if (!token) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  // find user based on token
  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  // set isVerify field to true
  user.isVerified = true;

  // remove verification token
  user.verificationToken = undefined;

  // save response
  await user.save();

  res.status(201).json({
    message: "User Verify Successfull",
    success: true,
  });
};

// Login user
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All field are required",
    });
  }

  try {
    // check email in db
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // user password and databse me save password match krega
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email and password!",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },

      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      },
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "User not login",
    });
  }
};

// getMe Profile
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password")
    console.log(user);

    if(!user){
        return res.status(400).json({
            success: false,
            message: "User not found"
        })
    };

    res.status(200).json({
        success: true,
        message: "Get user profile data",
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    })
  } catch (error) {
    console.log(error);
  }
};

// Logout User
const logoutUser = async (req, res) => {
  try {
    res.cookie('token', "", {});
    res.status(200).json({
        success: true,
        message: "Logged ot user successfull"
    })
  } catch (error) {}
};

// forget password
const forgetPassword = async (req, res) => {
  try {
    // get email req.body
    // find user based on email
    // reset token + reset expiry => Date.now() + 10 * 60 * 1000 => user.save()
    // send email => desgin url

    // get email req.body
    const {email} = req.body

    // validate email
    if(!email){
        return res.status(400).json({
            message: "Required email"
        })
    }
    // find user based on email
    const user = await User.findOne({email})

    if (!user) {
      return res.status(400).json({
        message: "Not found user",
      });
    }

    // create token
    const token = crypto.randomBytes(32).toString("hex")
    // console.log(token)

    const expireDate = Date.now() + 24 * 60 * 1000;
    console.log(expireDate)

    user.resetPasswordToken = token
    user.resetPasswordExpires = expireDate
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
      text: `Please click on the following link: ${process.env.BASE_URL}/api/v1/users/reset/${token}`, // plain text body
      html: "<b>Token Valid for 5 minute?</b>", // HTML body
    };

    await transporter.sendMail(mailOption);

    res.status(200).json({
      success: true,
      message: "Password forget check for mail verify"
    })
  } catch (error) {
    return res.status(400).json({
        success: false,
        message: "Password not reset"
    })
  }
};

// reset password
const resetPassword = async (req, res) => {
    try {

    // URL se token lo
    const { token } = req.params;

    // Body se new password lo
    const { password } = req.body;

    // User find karo
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    // User nahi mila ya token expire
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or Expired Token"
      });
    }

    // Password update
    user.password = password;

    // Token remove
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password Reset Successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }

}
export {
  registerUser,
  verifyUser,
  login,
  getMe,
  logoutUser,
  forgetPassword,
  resetPassword,
};
