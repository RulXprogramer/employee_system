import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemGraphqlModule } from './modules/system-graphql/system-graphql.module';

@Module({
  imports: [SystemGraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
