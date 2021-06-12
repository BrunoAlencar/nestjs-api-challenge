import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsePasswordDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  newPassword: string;
}
