import * as mongoose from 'mongoose'


export const FileSchema = new mongoose.Schema({
   file: String,
   id_user: Number,
   id_folder: Number,
   privacy: Boolean
 });