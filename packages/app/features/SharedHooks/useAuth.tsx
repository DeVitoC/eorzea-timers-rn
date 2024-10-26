import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY;

if (!secretKey) {
  throw new Error('JWT_SECRET_KEY is not defined');
}

const generateToken = (user: any) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, secretKey, {
    expiresIn: '1h',
  });

  return token;
};

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

const generateRefreshToken = (user: any) => {
  const secretKey = process.env.REFRESH_TOKEN_SECRET;

  if (!secretKey) {
    throw new Error('REFRESH_TOKEN_SECRET is not defined');
  }

  const payload = {
    id: user.id,
    email: user.email,
  };

  const refreshToken = jwt.sign(payload, secretKey, {
    expiresIn: '7d',
  });

  return refreshToken;
};

export { generateToken, verifyToken, generateRefreshToken };
