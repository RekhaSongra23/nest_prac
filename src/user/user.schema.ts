import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


@Schema({
  timestamps:true
})
export class User {
  id: mongoose.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  contact: string;
}
export const UserSchema=SchemaFactory.createForClass(User);

