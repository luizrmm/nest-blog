import {
  IsEmail,
  IsString,
  MinLength,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

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

export class UpdateUserDTO {
  @IsEmail()
  @IsOptional()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly bio: string;

  @IsOptional()
  @IsString()
  readonly image: string;
}

export interface AuthPayload {
  username: string;
}
