import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { bookService } from "./book.service";
import { BookDto } from "./bookdto";
import { Book } from "./book.schema";
import mongoose from "mongoose";
import { UpdateBookDto } from "./updateBookDto";

@Controller('/book')
export class BookController{
    constructor(private readonly bookservice:bookService){}


    @Post("")
     async creteBook(@Body() BookDto:BookDto):Promise<Book>{
        const cretebok=await this.bookservice.createBook(BookDto)
        return cretebok;
     }

     @Get()
     async findBookk(){
        const findbok=await this.bookservice.findBook();
        return findbok;
        
     }

     @Get(':id')
     async findbokbyid(@Param('id') id:mongoose.Types.ObjectId){
        const findbok1=await this.bookservice.findbokbyid(id)
        return findbok1;
     }

     @Put(':id')
     async updatebook (
        @Param('id') id:mongoose.Types.ObjectId,
      @Body() UpdateBookDto:UpdateBookDto){
        try{
            const updatebokk=await this.bookservice.updatebokbyid(id,UpdateBookDto)
            return updatebokk;
          
        }catch(err){
            throw new NotFoundException(err)
        }
     }   

    @Delete(':id')
     async delebok(@Param('id') id:mongoose.Types.ObjectId){
        try{        
        const delebook=await this.bookservice.deleteBook(id)
        return delebook;
        }catch(err){
            throw new NotFoundException(`book ${id} not found`)
        }
     }

}
