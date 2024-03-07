// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";
// import { Request } from "express"

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";


@Injectable()
export class authguard implements CanActivate{

    constructor(private jwtservice:JwtService){}
    async canActivate(context: ExecutionContext): Promise<boolean>  {
        const request=context.switchToHttp().getRequest();
        const token=this.extractTokenFromHeader(request);

        if(!token){
            throw new UnauthorizedException("");
        }

        try{
            const payload=this.jwtservice.verify(token,{secret:`${process.env.secret}`})
        }
        catch{
            throw new UnauthorizedException("");
        }
        return true;
        
    }
    
    extractTokenFromHeader(request:Request):string {
        const [type,token]=request.headers.authorization?.split ("") ??[];
        return type==='bearer' ? token:undefined;
    }

}
