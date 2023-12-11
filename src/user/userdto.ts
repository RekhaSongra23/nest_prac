import mongoose from "mongoose";

export class UserDto{
    id :mongoose.Types.ObjectId;
    name :string;
    address :string;
    contact :string;
}