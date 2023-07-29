export type UserDtoType = {
  _id: string | any;
  name: string;
  email: string;
  password: string;
  isActivated: boolean;
  activationLink?: string | undefined;
};

export default class UserDto {
  id: string;
  email: string;
  isActivated: boolean;

  constructor(model: UserDtoType) {
    this.id = model._id;
    this.email = model.email;
    this.isActivated = model.isActivated;
  }
}
