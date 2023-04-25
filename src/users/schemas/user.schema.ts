import * as mongoose from 'mongoose'


export const UserSchema = new mongoose.Schema({
   email: String,
   name: String,
   surname: String,
   picture: String
 });

UserSchema.index({email: 1},{unique: true})