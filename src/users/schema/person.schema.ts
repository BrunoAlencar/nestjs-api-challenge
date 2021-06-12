import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user.schema';
import { Address } from 'cluster';

export type PersonDocument = Person & Document;

@Schema()
export class Person {
  @ApiProperty()
  @Prop({ required: true })
  name: string;

  @ApiProperty()
  @Prop()
  gender: string;

  @ApiProperty()
  @Prop()
  birthday: Date;

  @ApiProperty()
  @Prop()
  selfie: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }] })
  address: Address[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
