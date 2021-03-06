import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../user/user.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UserService) {
        
    }
    @Get()
    read(): Promise<User[]> {
        return this.userService.readAll();
    }

    @Post('create')
    async create(@Body() user: User): Promise<any> {
        return this.userService.create(user);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() user: User): Promise<any> {
        user.id = Number(id);
        return this.userService.update(user);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.userService.delete(id);
    }
}
