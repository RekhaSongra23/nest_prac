import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel, Schema } from "@nestjs/mongoose";
import  { Model } from "mongoose";
import { User } from "src/user/user.schema";
import { UserDto } from "src/user/userdto";
import *as bcrypt from'bcrypt'


@Injectable()
export class AuthService{
    constructor(
        @InjectModel(User.name) private userModel:Model<User>,
        private jwtservice:JwtService,
        ){}

        async login(username:string,password:string){
         const usersign=await this.findbyuserName(username);
         if(!usersign){
            throw new UnauthorizedException('User not found');
         }

         const validpassword=await bcrypt.compare(password,usersign.password);
         if(!validpassword){
            throw new UnauthorizedException('password not matched');
         }
        

        const payload= { sub:usersign.id, role:usersign.role };
        const acessToken=this.jwtservice.sign(payload,
            {secret:`${process.env.JWT_SECRET}`});
            return {acessToken};
        }  



        async findbyuserName(username:string){
        return await this.userModel.findOne({username});
        }


        async createUser(UserDto:UserDto):Promise<User>{
            const {username,password,address,contact}=UserDto;
            const hashedpassword=await bcrypt.hash(password,10);
            const res=await this.userModel.create({ ...UserDto, password:hashedpassword,});
            return res;
        }
}
  






   
    

    

    
    
