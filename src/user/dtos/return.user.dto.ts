import { User } from '../../models/user.model';

export class ReturnUserDto {
  user: User;
  message: string;
}
