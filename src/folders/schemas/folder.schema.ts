import * as mongoose from 'mongoose'


export const FolderSchema = new mongoose.Schema({
   name: String,
   id_user: Number,
   id_folder: Number,
 });
