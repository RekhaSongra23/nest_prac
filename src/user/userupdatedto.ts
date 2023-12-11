import mongoose from 'mongoose';

export class UserUpdateDto {
  id: mongoose.Types.ObjectId;
  name: string;
  address: string;
  contact: string;
}
