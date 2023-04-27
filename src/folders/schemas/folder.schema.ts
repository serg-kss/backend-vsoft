import * as mongoose from 'mongoose'


export const FolderSchema = new mongoose.Schema({
  name: String,
  created: String,
  id_folder: String,
  changes: [],
 });
