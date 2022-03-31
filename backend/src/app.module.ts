import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { MessageService } from './message/message.service';
import { MessagesController } from './messages/messages.controller';
import { User } from './entities/user.entity';
import { UserService } from './user/user.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'nestng',
      username: 'root',
      password: '',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Message, User]),
  ],
  controllers: [AppController, MessagesController, UsersController],
  providers: [AppService, MessageService, UserService],
})
export class AppModule {}
