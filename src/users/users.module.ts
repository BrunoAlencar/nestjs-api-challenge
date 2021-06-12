import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UsersSchema } from './schema/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UsersSchema;
          schema.plugin(softDeletePlugin);
          return schema;
        },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
