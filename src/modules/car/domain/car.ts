import { Document, Schema } from 'mongoose';

export interface Car {
  _id?: string;
  color: string | any;
  model: string | any;
}

export interface CarDocument extends Car, Document {
  _id: any;
  createdAt: Date;
  updatedAt: Date;
}

export const CarSchema = new Schema({
  color: String,
  model:String,

}, {
  versionKey: false,
  timestamps: true,
});
