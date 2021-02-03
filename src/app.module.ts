import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
// import { User } from './users/user.entity';

@Module({
  // imports: [QuestModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],

  imports: [QuestModule, UsersModule,
    TypeOrmModule.forRoot(),
  ],

})
export class AppModule {  constructor(private connection: Connection) {}
}

