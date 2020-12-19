import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../models/user.model';

export class ReturnUserDto {
  @ApiProperty()
  user: User;

  @ApiProperty()
  message: string;
}
