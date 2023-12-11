import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Book } from "./book.schema";
import mongoose from "mongoose";
import { BookDto } from "./bookdto";
import { UpdateBookDto } from "./updateBookDto";

@Injectable()
export class bookService{
    constructor( 
        @InjectModel(Book.name) 
        private  bookModel:mongoose.Model<Book>, ){}



        async createBook(BookDto:BookDto):Promise<Book>{

            const books=await this.bookModel.create(BookDto)
            return  books;

        }

        async findBook ():Promise<Book[]>{
            const findbok=await this.bookModel.find()
            return findbok;
        }  

        async findbokbyid(id:mongoose.Types.ObjectId):Promise<Book>{
            const findbokbyid=await this.bookModel.findById(id)
            return findbokbyid;
        }


        async updatebokbyid(id :mongoose.Types.ObjectId,UpdateBookDto:UpdateBookDto):Promise<Book>{
            const updatebok=await this.bookModel.findByIdAndUpdate(id,UpdateBookDto)

            if(!updatebok){
                throw new NotFoundException(`Book with this id ${id} not found`)
            }
            return updatebok;
        }

        async deleteBook(id:mongoose.Types.ObjectId){
            const deleteBook=await this .bookModel.findByIdAndDelete(id)
            if(!deleteBook){
                throw new NotFoundException(`book with id ${id}not found`)
            }
            return deleteBook;
        }


}