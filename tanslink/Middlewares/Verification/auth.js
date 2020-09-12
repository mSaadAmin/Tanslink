function verifyToken(req, res, next) {
  const bearerheader = req.headers["authorization"];

  if (typeof bearerheader !== null) {
    const bearer = bearerheader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    console.log("Error in Auth.js");
    return res.json({
      message: "Error In Auth.js",
    });
  }
}

module.exports = verifyToken;
