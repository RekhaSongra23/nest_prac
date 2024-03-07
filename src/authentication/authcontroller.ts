import { Body, Controller, HttpException, NotFoundException, Post } from "@nestjs/common";
import { UserDto } from "src/user/userdto";
import { authLoginDto } from "./authlogin.dto";
import { AuthService } from "./authService";

@Controller('/auth')
export class AuthController{

    constructor(private AuthService:AuthService ){}

    @Post('/signup')
    async createUser(@Body()UserDto:UserDto){
        try{
            const usercreate=await this.AuthService.createUser(UserDto)
            return usercreate;
        }catch(err){
            throw new HttpException(err.message,err.statuscode ?? 400);
        }
    }

    @Post('/signin')

    async signin(
        username:string,
        password:string,
        @Body() usersign:authLoginDto) {
        const usersigned = await this.AuthService.login(
          usersign.username,
          usersign.password,
        );
        return usersigned;

    }

}