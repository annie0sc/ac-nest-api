import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
// import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [QuestModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],

  imports: [QuestModule, UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],

})
export class AppModule {}
