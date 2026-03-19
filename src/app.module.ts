import { Event } from './events/event.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events/events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { AppJapanService } from './app.japan.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'example', 
    database: 'nest-events',
    driver: require('mysql2'),
    entities: [Event],
    synchronize: true
  }),
  EventsModule
],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService
    }
  ],
})
export class AppModule {}
