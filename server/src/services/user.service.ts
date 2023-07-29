import UserModel from '../models/user.model';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailService from './mail.service';
import tokenService from './token.service';
import UserDto, { UserDtoType } from '../dtos/user.dto';
import ApiError from '../exceptions/api-error.exception';

class UserService {
  async register(name: string, email: string, password: string) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`User with this email: ${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 4);
    const activationLink = uuidv4();
    const user: UserDtoType = await UserModel.create({
      name,
      email,
      password: hashPassword,
      isActivated: false,
      activationLink,
    });

    await mailService.sendActivationMail(email, `${process.env.API_URL}/activate/${activationLink}`);
    const userDto = new UserDto(user); // id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(activationLink: string) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest('Bad activation URL');
    }

    user.isActivated = true;
    await user.save();
  }
}

export default new UserService();
