import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
  timestamps: true,
})
export class Book {
  id: mongoose.Types.ObjectId;
  @Prop()
  title: string;

  @Prop()
  desc: string;

  @Prop()
  price: string;

  @Prop()
  category: string;
}

export const BookSchema=SchemaFactory.createForClass(Book)