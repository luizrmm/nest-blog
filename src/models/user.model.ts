import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  readonly password: string;
}
export class RegisterDTO extends LoginDTO {
  @IsString()
  @IsNotEmpty()
  readonly username: string;
}

export interface AuthPayload {
  username: string;
}
