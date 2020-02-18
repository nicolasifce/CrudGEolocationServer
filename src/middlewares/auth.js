const TOKEN = "d407ff8d947f877167fdfe89dedcbc20";

module.exports = (req, res, next) => {
  const authHeader = req.headers.token;

  if (!authHeader) return res.status(401).send({ error: "No token provided" });

  if (authHeader != TOKEN)
    return res.status(401).send({ error: "token incorrect" });

  return next();
};
