import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRole } from "src/user/userdto";

Injectable()
export class roleguard implements CanActivate{
    constructor(private reflector:Reflector){}
    canActivate(context: ExecutionContext):boolean {
        const roles=this.reflector.get<UserRole[]>("roles",context.getHandler());
        
        if(!roles){
        return true;
        }
    
    
    const request=context.switchToHttp().getRequest();
    const user=request.user;

    if(!user || !user.role){
        return false;
    }
    return roles.includes(user.role);

    }
}