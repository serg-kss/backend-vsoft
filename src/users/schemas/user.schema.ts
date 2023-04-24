import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
   email: String,
   id: Number,
 });

UserSchema.index({email: 1},{unique: true})