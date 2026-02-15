import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/core/prisma.service';
import { User } from 'generated/prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService)
  {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const checkUser = await this.prisma.user.findUnique({
      where: {
        username: createUserDto.username
      }
    })

    if (checkUser) {
      throw new BadRequestException("User with this username already exists");
    }

    const newUser = await this.prisma.user.create({
      data: createUserDto
    })

    return newUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
