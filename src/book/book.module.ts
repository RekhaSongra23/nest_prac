import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Book, BookSchema } from "./book.schema";
import mongoose from "mongoose";
import { BookController } from "./book.controller";
import { bookService } from "./book.service";

@Module({

    imports:[MongooseModule.forFeature([{name:Book.name,schema:BookSchema}]) ],
    controllers:[BookController],
    providers:[bookService]

})

export class BookModule{}