import { UserDto } from '../dto/user.dto';

export class User {
  public firstName: string;
  public lastName: string;
  public nickName: string;
  public icon: string;

  constructor(data: Required<UserDto>) {
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.nickName = data.nick_name;
    this.icon = data.icon;
  }
}