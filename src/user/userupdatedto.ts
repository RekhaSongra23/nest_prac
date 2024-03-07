import mongoose from 'mongoose';

export class UserUpdateDto {
  id: mongoose.Types.ObjectId;
  username: string;
  password:string;
  address: string;
  contact: string;
}
