import { Document } from "mongoose";


export interface IUser extends Document{
   readonly email: String;
   readonly id: Number;
}

