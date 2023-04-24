import { Document } from "mongoose";


export interface IFile extends Document{
   file: String;
   id_user: Number;
   id_folder: Number;
   privacy: Boolean;
}