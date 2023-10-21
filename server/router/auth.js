const router = require("express").Router();
const ussr = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  console.log(req.body, 'backend data')
  const adddata = new ussr({
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTOR
    ).toString(),
  });
  try {
    const addeduser = await adddata.save();
    res.status(201).json(addeduser);
    console.log(addeduser)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const getdata = await ussr.find();
    res.status(200).json(getdata);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const client = await ussr.findOne({ email: req.body.email });
    !client && res.status(401).json("Wrong email please check your email");

    const hashedpassword = CryptoJS.AES.decrypt(
      client.password,
      process.env.CRYPTOR
    );
    const originalpassword = hashedpassword.toString(CryptoJS.enc.Utf8);

    originalpassword !== req.body.password &&
      res.status(401).json("invalid password");

    const accesstoken = jwt.sign(
      {
        id: client._id,
      },
      process.env.JWTSEC,
      { expiresIn: "3d" }
    );

    console.log("clienttttt",);

    const { password, ...others } = client._doc;
    res.status(200).json({ ...others, accesstoken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
