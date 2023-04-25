import { Document } from "mongoose";


export interface IUser extends Document{
   email: String,
   name: String,
   surname: String,
   picture: String
}

