import { Body, Controller, Get, Patch } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser, GetCurrentUserId } from '../auth/decorator';
import { EditUserDto } from './dto/edit-user.dto';
import { UserService } from './user.service';
@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetCurrentUserId() userId: number, @Body() dto: EditUserDto) {
    return this.UserService.editUser(userId, dto);
  }
}
