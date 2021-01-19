import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { QuestModule } from './quest/quest.module';

@Module({
//  imports: [QuestModule],
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
