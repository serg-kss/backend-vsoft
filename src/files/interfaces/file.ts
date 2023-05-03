import { Document } from "mongoose";


export interface IFile extends Document{
   file: string;
   id_folder: string;
   privacy: boolean;
   email: string;
}