import * as jwt from 'jsonwebtoken';
import tokenModel from '../models/token.model';

type PayloadType = {
  id: string;
  email: string;
  isActivated: boolean;
};

class TokenService {
  generateTokens(payload: PayloadType) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN || '', {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN || '', {
      expiresIn: '30d',
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: string, refreshToken: string) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }
}

export default new TokenService();
