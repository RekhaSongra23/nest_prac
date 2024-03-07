import { IsEnum } from "@nestjs/class-validator";
import mongoose from "mongoose";

export enum UserRole{
    ADMIN='admin',
    VIEWER='viewer'
}

export class UserDto{
    id :mongoose.Types.ObjectId;
    username :string;
    password:string;
    address :string;
    contact :string;
    @IsEnum(UserRole)
    role:UserRole;
}