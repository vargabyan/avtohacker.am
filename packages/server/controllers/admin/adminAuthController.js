const { mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AdminAuth = require('../../models/adminAuth');

const { ACCESS_TOKEN_SECURET, REFRESH_TOKEN_SECURET } = process.env;
const refreshTokens = [];

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync('password', salt);
// 'hesh_password = sdds23265s2d61s6132d312s1ds13d1'

const genereteToken = (user) =>
  jwt.sign(user, ACCESS_TOKEN_SECURET, { expiresIn: '30m' });

exports.postToken = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  const refreshtoken = request.body.token;

  if (refreshTokens == null) return response.sendStatus(401);
  if (!refreshTokens.includes(refreshtoken)) return response.sendStatus(403);

  jwt.verify(refreshtoken, REFRESH_TOKEN_SECURET, (err, user) => {
    if (err) return response.sendStatus(403);

    const accessToken = genereteToken(user);

    response.json({ accessToken });
  });
};

exports.getAdminAuth = async (request, response) => {
  if (!request.headers.authorization) response.sendStatus(401);

  const authHeaders = request.headers.authorization;
  const token = authHeaders && authHeaders.split(' ')[1];

  jwt.verify(token, ACCESS_TOKEN_SECURET, (err, user) => {
    if (err) return response.sendStatus(403);

    response.json({ auth: user });
  });
};

exports.postAdminAuth = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  const result = await AdminAuth.findOne({
    email: request.body.email,
  });
  const user = {
    email: result.email,
    password: result.password,
  };

  const checkHesh = bcrypt.compareSync(request.body.password, result.password);
  if (!checkHesh) return response.sendStatus(403);

  const accessToken = genereteToken(user);
  const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECURET);
  refreshTokens.push(refreshToken);

  response.json({ accessToken, refreshToken });
};

mongoose.disconnect();
