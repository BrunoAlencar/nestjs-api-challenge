import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Person } from './person.schema';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @ApiProperty()
  @Prop({ required: true })
  address: string;

  @ApiProperty()
  @Prop()
  city: string;

  @ApiProperty()
  @Prop()
  state: string;

  @ApiProperty()
  @Prop()
  postalCode: string;

  @ApiProperty()
  @Prop()
  country: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Person' })
  person: Person;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
