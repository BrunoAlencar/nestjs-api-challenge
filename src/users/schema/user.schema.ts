import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Person } from './person.schema';
// import softdelete from 'mongoose-softdelete';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Person' })
  person: Person;
}

export const UsersSchema = SchemaFactory.createForClass(User);
// UsersSchema.plugin(softdelete);

// export default UsersSchema;
