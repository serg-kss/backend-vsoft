import * as mongoose from 'mongoose'


export const FileSchema = new mongoose.Schema({
   file: String,
   id_folder: String,
   privacy: Boolean,
   email: String
 });