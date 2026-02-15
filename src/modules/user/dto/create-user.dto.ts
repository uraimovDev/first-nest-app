import { IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";

enum Gender {
    FEMALE = 'female',
    MALE = 'male'
}
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    full_name: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
    
    @IsNotEmpty()
    @IsEnum(Gender)
    gender: Gender;
}
