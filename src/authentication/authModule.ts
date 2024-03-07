import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import { User, UserSchema } from "src/user/user.schema";
import { AuthController } from "./authcontroller";
import { AuthService } from "./authService";

@Module({
    imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
    JwtModule.register({secret:process.env.JWT_SECRET,
    signOptions:{expiresIn:"2h"}
})],
controllers:[AuthController],
providers:[JwtService,AuthService]
})
export class AuthModule{}