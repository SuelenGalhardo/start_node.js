const { verify } = require("jsonwebtoken"); //fuction disponible en jsonwebtoken
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError(" JWT token no informado", 401);
  }
  const [, token] = authHeader.split(" "); //Bearer xxxxxxxx
  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);

    request.user = {
      id: Number(user_id),
    };
    return next();
  } catch {
    throw new AppError(" JWT token Inválido", 401);
  }
}

module.exports =ensureAuthenticated;
