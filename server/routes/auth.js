const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models").user;
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
  console.log("Receiving a request related to auth");
  next();
});

router.get("/testAPI", (req, res) => {
  return res.send("Successfully connected to auth route...");
});

router.post("/register", async (req, res) => {
  try {
    // Verify data meets requirements
    let { error } = registerValidation(req.body);
    if (error) {
      console.log("Validation error:", error.details[0].message);
      return res.status(400).send(error.details[0].message);
    }

    // Check if email is already registered
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("This email has already been registered.");

    // Create new user
    let { email, username, password, role } = req.body;
    let newUser = new User({ email, username, password, role });
    let savedUser = await newUser.save();
    
    return res.send({
      msg: "User successfully saved.",
      savedUser,
    });
  } catch (e) {
    console.error("Registration error:", e);
    return res.status(500).send("Unable to save user. " + e.message);
  }
});

router.post("/login", async (req, res) => {
  // Verify data meets requirements
  let { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email is registered
  const foundUser = await User.findOne({ email: req.body.email });
  if (!foundUser) {
    return res.status(401).send("Unable to find user. Please check if email is correct.");
  }

  foundUser.comparePassword(req.body.password, (err, isMatch) => {
    if (err) return res.status(500).send(err);

    if (isMatch) {
      // Create JSON web token
      const tokenObject = { _id: foundUser._id, email: foundUser.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      return res.send({
        message: "Login successful",
        token: "JWT " + token,
        user: foundUser,
      });
    } else {
      return res.status(401).send("Password incorrect");
    }
  });
});

module.exports = router;
