import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Post('')
    registerUser(){
        return this.userService.registerUser();
    }

    @Get('')
    getUsers(){
        return this.userService.getUsers();
    }



}
