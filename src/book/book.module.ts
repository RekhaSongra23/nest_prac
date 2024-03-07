import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Book, BookSchema } from "./book.schema";
import mongoose from "mongoose";
import { BookController } from "./book.controller";
import { bookService } from "./book.service";
import { AuthModule } from "src/authentication/authModule";
import { Authguard } from "src/role/authguard";
import { AuthService } from "src/authentication/authService";
import { JwtService } from "@nestjs/jwt";
import { RoleGuard } from "src/role/roleguars";

@Module({

    imports:[MongooseModule.forFeature([{name:Book.name,schema:BookSchema}]) ],
    controllers:[BookController],
    providers:[bookService,JwtService,Authguard]

})

export class BookModule{}