import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserRole } from "./userdto";


@Schema({
  timestamps: true,
})
export class User {
  id: mongoose.Types.ObjectId;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  address: string;

  @Prop()
  contact: string;

  @Prop()
  role:UserRole
}
export const UserSchema=SchemaFactory.createForClass(User);

