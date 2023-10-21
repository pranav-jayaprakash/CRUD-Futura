const router = require("express").Router();
const ussr = require("../models/user");
const crypto = require("crypto-js");
const { verifyToken, verifyTokenandAuthorization } = require("../verifyToken");

router.put("/:id",verifyToken,verifyTokenandAuthorization, async (req, res) => {
  
  console.log(req.body,'backend data')
  try {
    

    if (req.body.password) {
      req.body.password = crypto.AES.encrypt(
        req.body.password,
        process.env.CRYPTOR
      ).toString();
      
    }
    var dataupdate= {...req.body}
    console.log(dataupdate,'final data')


    const updateuser = await ussr.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    console.log(updateuser, "user updated");
    res.status(200).json(updateuser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/delete/:id' ,verifyToken,verifyTokenandAuthorization,async (req,res)=>{
  try {

    await ussr.findByIdAndDelete(req.params.id)
    res.status(200).json('File deleted')
    
  } catch (error) {
    res.status(500).json(error);
    
  }
})

module.exports = router;

