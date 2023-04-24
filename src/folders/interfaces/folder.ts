import { Document } from "mongoose";


export interface IFolder extends Document{
   name: String;
   id_user: Number;
   id_folder: Number;
}