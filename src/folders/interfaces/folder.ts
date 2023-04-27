import { Document } from "mongoose";


export interface IFolder extends Document{
   name: string;
   created: string;
   id_folder: string;
   changes: [];
}
